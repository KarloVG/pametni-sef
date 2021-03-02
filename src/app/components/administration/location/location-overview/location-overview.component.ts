import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TableColumn } from '@swimlane/ngx-datatable';
import { ConfirmationModalComponent } from 'src/app/shared/components/confirmation-modal/confirmation-modal.component';
import { LanguageDeterminator } from 'src/app/shared/services/utils/language-determinator';
import { ModalAoeLocationComponent } from '../modal-aoe-location/modal-aoe-location.component';
import { LOCATION_CRO, LOCATION_ENG } from '../models/location-columns';
import { ILocationResponse } from '../models/response/location-response';

@Component({
  selector: 'app-location-overview',
  templateUrl: './location-overview.component.html',
  styleUrls: ['./location-overview.component.scss']
})
export class LocationOverviewComponent implements OnInit {

  /* #region  Variables */
  currentLang: string;
  mainTableColumns: TableColumn[] = [];
  companies: ILocationResponse[] = [{
    id: 1,
    description: "SPAR ISTOK",
    companyName: "SPAR",
    address: "Marulićeva 2"
  },
  {
  id: 1,
  description: "SPAR ZAPAD",
  companyName: "SPAR",
  address: "Šabanova 3"
}
];
  /* #endregion */

  /* #region  Constructor */
  constructor(
    private readonly _languageDeterminator: LanguageDeterminator,
    private _modalService: NgbModal
  ) {
    this._languageDeterminator.currentActiveLanguage$.subscribe(
      data => {
        this.currentLang = data;
        this.mainTableColumns = this.currentLang === 'hr' ? LOCATION_CRO : LOCATION_ENG;
      }
    );
  }
  /* #endregion */

  ngOnInit(): void {
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
