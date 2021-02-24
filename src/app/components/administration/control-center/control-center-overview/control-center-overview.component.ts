import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TableColumn } from '@swimlane/ngx-datatable';
import { BehaviorSubject } from 'rxjs';
import { ConfirmationModalComponent } from 'src/app/shared/components/confirmation-modal/confirmation-modal.component';
import { LanguageDeterminator } from 'src/app/shared/services/utils/language-determinator';
import { ModalAoeControlCenterComponent } from '../modal-aoe-control-center/modal-aoe-control-center.component';
import { CONTROL_CENTERS_CRO, CONTROL_CENTERS_ENG } from '../models/control-center-columns';
import { DEVICES_CRO, DEVICES_ENG } from '../models/devices-columns';
import { IControlCenterResponse } from '../models/response/control-center-response';

@Component({
  selector: 'app-control-center-overview',
  templateUrl: './control-center-overview.component.html',
  styleUrls: ['./control-center-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ControlCenterOverviewComponent implements OnInit {

  /* #region Variables */
  currentLang: string;
  mainTableColumns: TableColumn[] = [];
  altTableColumns: TableColumn[] = [];
  controlCenters: IControlCenterResponse[] = [
    {
      id: 1,
      name: 'Rijeka sjever',
      mailList: ['boško.buha@securitas.net', 'jure.boban@securitas.net', 'marko.markovic@securitas.net']
    }
  ];
  devices: any[] = [
    {
      id: 1,
      transactionId: 32131,
      name: 'Uređaj 123',
      locationName: 'Marjan',
      companyName: 'Lidl d.o.o',
      status: 'Aktivan',
      type: 'Uređaj za depozit - MEI',
      controlCenter: 'Rijeka zapad - Rijeka'
    },
    {
      id: 2,
      transactionId: 567576,
      name: 'Uređaj 654',
      locationName: 'Zaseok',
      companyName: 'Špar d.o.o',
      status: 'Aktivan',
      type: 'Uređaj za depozit - MEI',
      controlCenter: 'Rijeka zapad - Rijeka'
    }
  ];
  private mainTableClickedSubject = new BehaviorSubject<boolean>(false);
  mainTableClickedAction$ = this.mainTableClickedSubject.asObservable();
  /* #endregion */

  /* #region Constructor */
  constructor(
    private _languageDeterminator: LanguageDeterminator,
    private _modalService: NgbModal
  ) {
    this._languageDeterminator.currentActiveLanguage$.subscribe(
      data => {
        this.currentLang = data;
        this.mainTableColumns = this.currentLang === 'hr' ? CONTROL_CENTERS_CRO : CONTROL_CENTERS_ENG;
        this.altTableColumns = this.currentLang === 'hr' ? DEVICES_CRO : DEVICES_ENG;
      }
    )
  }
  /* #endregion */

  /* #region  Public methods */
  ngOnInit(): void {
  }

  onClickMainTableRow(event): void {
    if (event.type === 'click') {
      this.mainTableClickedSubject.next(true);
    }
  }

  addOrEditControlCenter(row?: IControlCenterResponse): void {
    const modalRef = this._modalService.open(ModalAoeControlCenterComponent, {
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

  deleteControlCenter(row: IControlCenterResponse): void {
    const modalRef = this._modalService.open(ConfirmationModalComponent, {
      backdrop: 'static',
      keyboard: false
    });
    modalRef.componentInstance.title = 'Brisanje kontrolnog centra';
    modalRef.componentInstance.description = `Jeste li sigurni da želite obrisati kontrolni centar pod nazivom ${row.name} sa popisa?`;
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
  /* #endregion */
}
