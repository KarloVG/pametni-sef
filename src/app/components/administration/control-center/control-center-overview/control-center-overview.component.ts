import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TableColumn } from '@swimlane/ngx-datatable';
import { BehaviorSubject, EMPTY, Observable, Subject } from 'rxjs';
import { catchError, take, tap } from 'rxjs/operators';
import { ConfirmationModalComponent } from 'src/app/shared/components/confirmation-modal/confirmation-modal.component';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { LanguageDeterminator } from 'src/app/shared/services/utils/language-determinator';
import { ModalAoeControlCenterComponent } from '../modal-aoe-control-center/modal-aoe-control-center.component';
import { CONTROL_CENTERS_CRO, CONTROL_CENTERS_ENG } from '../models/control-center-columns';
import { DEVICES_CRO, DEVICES_ENG } from '../models/devices-columns';
import { IControlCenterResponse } from '../models/response/control-center-response';
import { ControlCenterService } from '../services/control-center.service';

@Component({
  selector: 'app-control-center-overview',
  templateUrl: './control-center-overview.component.html',
  styleUrls: ['./control-center-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ControlCenterService]
})
export class ControlCenterOverviewComponent implements OnInit, AfterViewInit {

  /* #region Variables */
  currentLang: string;
  mainTableColumns: TableColumn[] = [];
  altTableColumns: TableColumn[] = [];
  controlCenters$: Observable<IControlCenterResponse[]>;
  controlCenterSubject$: Subject<boolean> = new Subject();
  isLoadingMainTable: boolean = false;
  // devices: any[] = [
  //   {
  //     id: 1,
  //     transactionId: 32131,
  //     name: 'Uređaj 123',
  //     locationName: 'Marjan',
  //     companyName: 'Lidl d.o.o',
  //     status: 'Aktivan',
  //     type: 'Uređaj za depozit - MEI',
  //     controlCenter: 'Rijeka zapad - Rijeka'
  //   },
  //   {
  //     id: 2,
  //     transactionId: 567576,
  //     name: 'Uređaj 654',
  //     locationName: 'Zaseok',
  //     companyName: 'Špar d.o.o',
  //     status: 'Aktivan',
  //     type: 'Uređaj za depozit - MEI',
  //     controlCenter: 'Rijeka zapad - Rijeka'
  //   }
  // ];
  // private mainTableClickedSubject = new BehaviorSubject<boolean>(false);
  // mainTableClickedAction$ = this.mainTableClickedSubject.asObservable();
  /* #endregion */

  /* #region Constructor */
  constructor(
    private _languageDeterminator: LanguageDeterminator,
    private _modalService: NgbModal,
    private _controlCenterService: ControlCenterService,
    private readonly _notificationService: NotificationService,
    private ref: ChangeDetectorRef
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
    this.controlCenterSubject$.subscribe(res => {
      this.isLoadingMainTable = true;
      this.ref.markForCheck();
      this.controlCenters$ = this._controlCenterService.controlCenters$.pipe(
        tap(() => this.isLoadingMainTable = false),
        catchError(err => {
          this._notificationService.fireErrorNotification("Greška", err);
          return EMPTY;
        })
      );
    });
  }

  ngAfterViewInit(): void {
    this.controlCenterSubject$.next(true);
  }

  // onClickMainTableRow(event): void {
  //   if (event.type === 'click') {
  //     this.mainTableClickedSubject.next(true);
  //   }
  // }

  addOrEditControlCenter(row?: IControlCenterResponse): void {
    const modalRef = this._modalService.open(ModalAoeControlCenterComponent, {
      size: 'xl',
      backdrop: 'static',
      keyboard: false
    });
    console.log(row)
    modalRef.componentInstance.row = row ?? null;
    modalRef.result.then((result) => {
      this._notificationService.fireSuccessMessage('Uspjeh', row ? "Kontrolni centar je uređen" : "Kontrolni centar je dodan.");
      this.controlCenterSubject$.next(true);
    }).catch((reason) => {
      this._notificationService.fireWarningMessage('Pažnja', row ? "Kontrolni centar nije uređen" : "Kontrolni centar nije dodan.");
    });
  }

  deleteControlCenter(row: IControlCenterResponse): void {
    const modalRef = this._modalService.open(ConfirmationModalComponent, {
      backdrop: 'static',
      keyboard: false
    });
    modalRef.componentInstance.title = 'Brisanje kontrolnog centra';
    modalRef.componentInstance.description = `Jeste li sigurni da želite obrisati kontrolni centar pod nazivom ${row.name} sa popisa?`;
    modalRef.componentInstance.isDelete = true;
    modalRef.result.then((result) => {
      this._controlCenterService.delete(row.id)
        .pipe(
          take(1),
          catchError(err => {
            this._notificationService.fireErrorNotification('Greška', err);
            return EMPTY;
          })
        )
        .subscribe((data) => {
          this._notificationService.fireSuccessMessage('Uspjeh', 'Kontrolni centar je obrisan.');
          this.controlCenterSubject$.next(true);
        });
    })
      .catch((reason) => {
        this._notificationService.fireWarningMessage('Pažnja', 'Kontrolni centar nije obrisan');
      });
  }
  /* #endregion */
}
