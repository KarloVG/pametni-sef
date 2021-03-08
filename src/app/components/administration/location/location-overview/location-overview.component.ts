import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TableColumn } from '@swimlane/ngx-datatable';
import { BehaviorSubject, EMPTY, Observable, Subject } from 'rxjs';
import { catchError, map, take, tap } from 'rxjs/operators';
import { ConfirmationModalComponent } from 'src/app/shared/components/confirmation-modal/confirmation-modal.component';
import { BasePaginationComponent } from 'src/app/shared/components/pagination/base-pagination.component';
import { IPaginationBase } from 'src/app/shared/models/pagination/base-pagination';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { LanguageDeterminator } from 'src/app/shared/services/utils/language-determinator';
import { ModalAoeLocationComponent } from '../modal-aoe-location/modal-aoe-location.component';
import { LOCATION_CRO, LOCATION_ENG } from '../models/location-columns';
import { ILocationResponse } from '../models/response/location-response';
import { LocationService } from '../services/location.service';

@Component({
  selector: 'app-location-overview',
  templateUrl: './location-overview.component.html',
  styleUrls: ['./location-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LocationOverviewComponent extends BasePaginationComponent implements OnInit, AfterViewInit {

  /* #region  Variables */
  currentLang: string;
  mainTableColumns: TableColumn[] = [];
  locations$: Observable<ILocationResponse[]>;
  locationSubject$: Subject<boolean> = new Subject();
  isLoadingMainTable: BehaviorSubject<boolean> = new BehaviorSubject(true);
  paginationRequest: IPaginationBase;
  pageSize: number = 10;
  count: number = 0;
  /* #endregion */

  /* #region  Constructor */
  constructor(
    private readonly _languageDeterminator: LanguageDeterminator,
    private _modalService: NgbModal,
    private ref: ChangeDetectorRef,
    private _locationService: LocationService,
    private _notificationService: NotificationService
  ) {
    super();
    this._languageDeterminator.currentActiveLanguage$.subscribe(
      data => {
        this.currentLang = data;
        this.mainTableColumns = this.currentLang === 'hr' ? LOCATION_CRO : LOCATION_ENG;
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

    this.locationSubject$.subscribe(res => {
      this.isLoadingMainTable.next(true);
      this.ref.markForCheck();
      this.fetchPage();
    });
  }

  ngAfterViewInit(): void {
    this.locationSubject$.next(true);
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
    this.fetchPage()
  }

  setPaginationOption(page: number, pageSize?: number): void {
    this.currentPage = page;
    this.paginationRequest.page = page + 1;

    if (pageSize) {
      this.paginationRequest.pageSize = pageSize;
    }
  }

  fetchPage(): void {
    this.locations$ = this._locationService.getLocationsPaginated(this.paginationRequest).pipe(
      tap((data) => { this.isLoadingMainTable.next(false); this.count = data.count; }),
      map((response) => response.data),
      catchError(err => {
        this._notificationService.fireErrorNotification("Greška", err);
        return EMPTY;
      })
    );
  }

  addOrEditLocation(row?: ILocationResponse): void {
    const modalRef = this._modalService.open(ModalAoeLocationComponent, {
      size: 'xl',
      backdrop: 'static',
      keyboard: false
    });
    modalRef.componentInstance.row = row ?? null;
    // modalRef.result.then((result) => {
    //   if (result == true) {
    //     this._accountService
    //       .delete(account.id)
    //       .pipe(
    //         take(1)
    //       )
    //       .subscribe((data) => {
    //         this.handleSuccesResponse('Račun je obrisan');
    //       });
    //   }
    // })
    // .catch((reason) => {
    //   this.handleModalDismiss('Račun nije obrisan');
    // });
  }

  deleteLocation(row: ILocationResponse): void {
    const modalRef = this._modalService.open(ConfirmationModalComponent, {
      backdrop: 'static',
      keyboard: false
    });
    modalRef.componentInstance.title = 'Brisanje lokacije';
    modalRef.componentInstance.description = `Jeste li sigurni da želite obrisati lokaciju sa adresom ${row.address}?`;
    modalRef.componentInstance.isDelete = true;
    modalRef.result.then((result) => {
      this._locationService
        .delete(row.id)
        .pipe(
          take(1),
          catchError(err => {
            this._notificationService.fireErrorNotification('Greška', err);
            return EMPTY;
          })
        )
        .subscribe((data) => {
          this._notificationService.fireSuccessMessage('Uspjeh', 'Lokacija je obrisana.');
        });
    })
      .catch((reason) => {
        this._notificationService.fireWarningMessage('Pažnja', 'Lokacija nije obrisana.');
      });
  }

}
