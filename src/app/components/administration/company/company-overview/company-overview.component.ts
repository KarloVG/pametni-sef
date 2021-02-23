import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TableColumn } from '@swimlane/ngx-datatable';
import { ConfirmationModalComponent } from 'src/app/shared/components/confirmation-modal/confirmation-modal.component';
import { LanguageDeterminator } from 'src/app/shared/services/utils/language-determinator';
import { ModalAoeCompanyComponent } from '../modal-aoe-company/modal-aoe-company.component';
import { COMPANY_CRO, COMPANY_ENG } from '../models/company-columns';
import { ICompanyResponse } from '../models/response/company-response';

@Component({
  selector: 'app-company-overview',
  templateUrl: './company-overview.component.html',
  styleUrls: ['./company-overview.component.scss']
})
export class CompanyOverviewComponent implements OnInit {

  /* #region  Variables */
  currentLang: string;
  mainTableColumns: TableColumn[] = [];
  companies: ICompanyResponse[] = [{
    id: 1,
    deviceCount: 40,
    userCount: 12,
    name: 'Uređaj 321',
    headquarters: 'Podsusedska 21',
    address: 'Podsusedska 21',
    identificator: '321-ds2332-dsa1255'
  }];
  /* #endregion */

  /* #region  Constructor */
  constructor(
    private readonly _languageDeterminator: LanguageDeterminator,
    private _modalService: NgbModal
  ) {
    this._languageDeterminator.currentActiveLanguage$.subscribe(
      data => {
        this.currentLang = data;
        this.mainTableColumns = this.currentLang === 'hr' ? COMPANY_CRO : COMPANY_ENG;
      }
    );
  }
  /* #endregion */

  ngOnInit(): void {
  }

  addOrEditCompany(row?: ICompanyResponse): void {
    const modalRef = this._modalService.open(ModalAoeCompanyComponent, {
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

  deleteCompany(row: ICompanyResponse): void {
    const modalRef = this._modalService.open(ConfirmationModalComponent, {
      backdrop: 'static',
      keyboard: false
    });
    modalRef.componentInstance.title = 'Brisanje tvrtke';
    modalRef.componentInstance.description = `Jeste li sigurni da želite obrisati tvrtku pod nazivom ${row.name} sa popisa?`;
    modalRef.componentInstance.isDelete = true;
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

}
