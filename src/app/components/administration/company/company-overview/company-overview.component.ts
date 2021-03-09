import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TableColumn } from '@swimlane/ngx-datatable';
import { BehaviorSubject, EMPTY, Observable, Subject } from 'rxjs';
import { catchError, map, take, tap } from 'rxjs/operators';
import { ConfirmationModalComponent } from 'src/app/shared/components/confirmation-modal/confirmation-modal.component';
import { BasePaginationComponent } from 'src/app/shared/components/pagination/base-pagination.component';
import { IPaginationBase } from 'src/app/shared/models/pagination/base-pagination';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { LanguageDeterminator } from 'src/app/shared/services/utils/language-determinator';
import { ModalAoeCompanyComponent } from '../modal-aoe-company/modal-aoe-company.component';
import { COMPANY_CRO, COMPANY_ENG } from '../models/company-columns';
import { ICompanyResponse } from '../models/response/company-response';
import { CompanyService } from '../services/company.service';

@Component({
  selector: 'app-company-overview',
  templateUrl: './company-overview.component.html',
  styleUrls: ['./company-overview.component.scss']
})
export class CompanyOverviewComponent extends BasePaginationComponent implements OnInit, AfterViewInit {

  /* #region  Variables */
  currentLang: string;
  mainTableColumns: TableColumn[] = [];
  companySubject$: Subject<boolean> = new Subject();
  companies$: Observable<ICompanyResponse[]>;
  isLoadingMainTable: BehaviorSubject<boolean> = new BehaviorSubject(true);
  paginationRequest: IPaginationBase;
  pageSize: number = 10;
  count: number = 0;
  /* #endregion */

  /* #region  Constructor */
  constructor(
    private readonly _languageDeterminator: LanguageDeterminator,
    private _modalService: NgbModal,
    private _notificationService: NotificationService,
    private ref: ChangeDetectorRef,
    private _companyService: CompanyService
  ) {
    super();
    this._languageDeterminator.currentActiveLanguage$.subscribe(
      data => {
        this.currentLang = data;
        this.mainTableColumns = this.currentLang === 'hr' ? COMPANY_CRO : COMPANY_ENG;
      }
    );
  }
  /* #endregion */

  ngOnInit(): void {
    this.paginationRequest = {
      page: this.currentPage + 1,
      pageSize: this.pageSize,
      searchString: "",
      orderBy: null,
      filtering: null
    };

    this.companySubject$.subscribe(res => {
      this.isLoadingMainTable.next(true);
      this.ref.markForCheck();
      this.fetchPage();
    });
  }

  ngAfterViewInit(): void {
    this.companySubject$.next(true);
  }

  setPage(pageInfo): void {
    this.setPaginationOption(+pageInfo.offset);
    this.fetchPage();
  }

  onSort(event) {
    this.paginationRequest = {
      page: this.currentPage + 1,
      pageSize: this.pageSize,
      orderBy: event.sorts[0],
    };
    this.fetchPage();
  }

  setPaginationOption(page: number, pageSize?: number): void {
    this.currentPage = page;
    this.paginationRequest.page = page + 1;

    if (pageSize) {
      this.paginationRequest.pageSize = pageSize;
    }
  }

  fetchPage(): void {
    this.companies$ = this._companyService.getCompaniesPaginated(this.paginationRequest).pipe(
      tap((data) => { this.isLoadingMainTable.next(false); this.count = data.count; }),
      map((response) => response.data),
      catchError(err => {
        this._notificationService.fireErrorNotification("Greška", err);
        return EMPTY;
      })
    );
  }

  addOrEditCompany(row?: ICompanyResponse): void {
    const modalRef = this._modalService.open(ModalAoeCompanyComponent, {
      size: 'xl',
      backdrop: 'static',
      keyboard: false
    });
    modalRef.componentInstance.row = row ?? null;
    modalRef.result.then((result) => {
      this._notificationService.fireSuccessMessage('Uspjeh', row ? "Tvrtka je uređena" : "Tvrtka je dodana.");
      this.companySubject$.next(true);
    }).catch((reason) => {
      this._notificationService.fireWarningMessage('Pažnja', row ? "Tvrtka nije uređena" : "Tvrtka nije dodana.");
    });
  }

  deleteCompany(row: ICompanyResponse): void {
    const modalRef = this._modalService.open(ConfirmationModalComponent, {
      backdrop: 'static',
      keyboard: false
    });
    modalRef.componentInstance.title = 'Brisanje tvrtke';
    modalRef.componentInstance.description = `Jeste li sigurni da želite obrisati tvrtku pod nazivom ${row.name} sa popisa?`;
    modalRef.componentInstance.isDelete = true;
    modalRef.result.then((result) => {
      this._companyService
        .delete(row.id)
        .pipe(
          take(1),
          catchError(err => {
            this._notificationService.fireErrorNotification('Greška', err);
            return EMPTY;
          })
        )
        .subscribe((data) => {
          this._notificationService.fireSuccessMessage('Uspjeh', 'Tvrtka je obrisana.');
          this.companySubject$.next(true);
        });
    }).catch((reason) => {
      this._notificationService.fireWarningMessage('Pažnja', 'Tvrtka nije obrisana.');
    });
  }

}
