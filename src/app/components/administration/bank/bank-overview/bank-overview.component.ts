import { Component, OnInit } from '@angular/core';
import { LanguageDeterminator } from 'src/app/shared/services/utils/language-determinator';
import { BANK_CRO, BANK_ENG } from 'src/app/components/administration/bank/models/bank-columns';
import { IBankResponse } from 'src/app/components/administration/bank/models/response/bank-response';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalAoeIbanComponent } from '../modal-aoe-iban/modal-aoe-iban.component';
import { ConfirmationModalComponent } from 'src/app/shared/components/confirmation-modal/confirmation-modal.component';
import { ModalCumulativeOrderComponent } from '../modal-cumulative-order/modal-cumulative-order.component';
import { ModalAoeWebServiceComponent } from '../modal-aoe-web-service/modal-aoe-web-service.component';
import { ModalAoeRegionComponent } from '../modal-aoe-region/modal-aoe-region.component';
import { ModalAoeBankComponent } from '../modal-aoe-bank/modal-aoe-bank.component';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { BankService } from '../services/bank.service';
import { catchError, take } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

@Component({
  selector: 'app-bank-overview',
  templateUrl: './bank-overview.component.html',
  styleUrls: ['./bank-overview.component.scss']
})
export class BankOverviewComponent implements OnInit {

  currentLang: string;
  mainTableColumns = [];
  banks: IBankResponse[] = [];

  constructor(
    private _languageDeterminator: LanguageDeterminator,
    private _modal: NgbModal,
    private _notificationService: NotificationService,
    private _bankService: BankService
  ) {
    this._languageDeterminator.currentActiveLanguage$.subscribe(
      data => {
        this.currentLang = data;
        this.mainTableColumns = this.currentLang === 'hr' ? BANK_CRO : BANK_ENG;
      }
    )
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.banks = [
        {
          id: 1,
          name: 'PBZ d.o.o',
          roles: ['Administrator banke', 'CEO Securitas']
        },
        {
          id: 2,
          name: 'HPB d.o.o',
          roles: ['Administrator banke']
        }
      ];
    }, 1000)
  }

  addOrEditBank(row?: IBankResponse): void {
    const modalRef = this._modal.open(ModalAoeBankComponent, {
      backdrop: 'static',
      keyboard: false
    })
    modalRef.componentInstance.row = row ?? null;
    modalRef.result.then(res => {
      this._notificationService.fireSuccessMessage('Uspjeh', row ? 'Banka je uređena' : 'Banka je dodana');
    }).catch(reason => {
      this._notificationService.fireWarningMessage('Pažnja', row ? 'Banka nije uređena' : 'Banka nije dodana');
    });
  }

  addOrEditWebService(row: IBankResponse): void {
    const modalRef = this._modal.open(ModalAoeWebServiceComponent, {
      size: 'xl',
      backdrop: 'static',
      keyboard: false,
      windowClass: 'largeModalClass'
    })
    modalRef.componentInstance.row = row;
    modalRef.result.then(res => {

    }).catch(reason => {

    });
  }

  addOrEditRegion(row: IBankResponse): void {
    const modalRef = this._modal.open(ModalAoeRegionComponent, {
      backdrop: 'static',
      keyboard: false,
      size: 'lg'
    })
    modalRef.componentInstance.row = row;
    modalRef.result.then(res => {
    }).catch(reason => {
    });
  }

  openIBANModal(row?: IBankResponse): void {
    const modalRef = this._modal.open(ModalAoeIbanComponent, {
      size: 'xl',
      backdrop: 'static',
      keyboard: false,
      windowClass: 'largeModalClass'
    })
    modalRef.componentInstance.row = row;
    modalRef.result.then(res => {

    }).catch(reason => {

    });
  }

  openCumulativeOrderModal(row?: IBankResponse) {
    console.log('usao')
    const modalRef = this._modal.open(ModalCumulativeOrderComponent, {
      size: 'xl',
      backdrop: 'static',
      keyboard: false,
      windowClass: 'largeModalClass'
    })
    modalRef.componentInstance.row = row;
    modalRef.result.then(res => {

    }).catch(reason => {

    });
  }

  deleteBank(row) {
    const modalRef = this._modal.open(ConfirmationModalComponent, {
      backdrop: 'static',
      keyboard: false
    })
    modalRef.componentInstance.title = 'Brisanje banke';
    modalRef.componentInstance.description = `Jeste li sigurni da želite obrisati banku pod nazivom ${row.name} sa popisa?`;
    modalRef.componentInstance.isDelete = true;
    modalRef.result.then(res => {
      this._bankService.delete(row.id)
        .pipe(
          take(1),
          catchError(err => {
            this._notificationService.fireErrorNotification('Greška', err);
            return EMPTY;
          })
        )
        .subscribe((data) => {
          this._notificationService.fireSuccessMessage('Uspjeh', 'Banka je obrisana.');
        });
    })
      .catch((reason) => {
        this._notificationService.fireWarningMessage('Pažnja', 'Banka nije obrisana');
      });
  }

}
