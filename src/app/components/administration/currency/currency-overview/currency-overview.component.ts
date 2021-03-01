import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TableColumn } from '@swimlane/ngx-datatable';
import { BehaviorSubject } from 'rxjs';
import { ConfirmationModalComponent } from 'src/app/shared/components/confirmation-modal/confirmation-modal.component';
import { LanguageDeterminator } from 'src/app/shared/services/utils/language-determinator';
import { ModalAoeApoenComponent } from '../modal-aoe-apoen/modal-aoe-apoen.component';
import { ModalAoeCurrencyComponent } from '../modal-aoe-currency/modal-aoe-currency.component';
import { APOENS_CRO, APOENS_ENG } from '../models/apoens-column';
import { CURRENCY_CRO, CURRENCY_ENG } from '../models/currency-columns';
import { IApoenResponse } from '../models/response/apoen-response';
import { ICurrencyResponse } from '../models/response/currency-response';

@Component({
  selector: 'app-currency-overview',
  templateUrl: './currency-overview.component.html',
  styleUrls: ['./currency-overview.component.scss']
})
export class CurrencyOverviewComponent implements OnInit {

  currentLang: string;
  currencyTableColumns: TableColumn[] = [];
  apoenTableColumns: TableColumn[]= [];
  currencies: ICurrencyResponse[] = [
    {
      id: 1,
      name: "HRK",
      ratio: 1
    }
  ];
  apoenTable: IApoenResponse[] = [
    {
      id: 1,
      name: 'HRK',
      value: 10.00,
      type: { id: 1, name: 'Novčanice' }
    }
  ]

  private currencyTableClickedSubject = new BehaviorSubject<boolean>(false);
  currencyTableClickedAction$ = this.currencyTableClickedSubject.asObservable();

  constructor(
    private _languageDeterminator: LanguageDeterminator,
    private _modalService: NgbModal
  ) {
    this._languageDeterminator.currentActiveLanguage$.subscribe(
      data => {
        this.currentLang = data;
        this.currencyTableColumns = this.currentLang === 'hr' ? CURRENCY_CRO : CURRENCY_ENG;
        this.apoenTableColumns = this.currentLang === 'hr' ? APOENS_CRO : APOENS_ENG;
      }
    )
  }
  ngOnInit(): void {
  }

  openApoenStructure(event): void {
    if (event.type === 'click') {
      this.currencyTableClickedSubject.next(true);
    }
  }

  addOrEditApoen(apoen?: IApoenResponse): void {
    const modalRef = this._modalService.open(ModalAoeApoenComponent, {
      size: 'xl',
      backdrop: 'static',
      keyboard: false
    });
    modalRef.componentInstance.apoen = apoen ?? null;
  }
  
  addOrEditCurrency(row?: ICurrencyResponse): void {
    console.log(row)
    if (row) {
      const modalRef = this._modalService.open(ModalAoeCurrencyComponent, {
        size: 'xl',
        backdrop: 'static',
        keyboard: false
      });
      modalRef.componentInstance.currency = row ?? null;
    }
  }

  deleteApoenCurrency(row: ICurrencyResponse | IApoenResponse): void {
    console.log(row)
    if(row.hasOwnProperty('ratio')) {
      const modalRef = this._modalService.open(ConfirmationModalComponent, {
        backdrop: 'static',
        keyboard: false
        });
        modalRef.componentInstance.title = 'Brisanje valute';
        modalRef.componentInstance.description = `Jeste li sigurni da želite obrisati valutu pod nazivom ${row.name} sa popisa?`;
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
    } else {
      const modalRef = this._modalService.open(ConfirmationModalComponent, {
        backdrop: 'static',
        keyboard: false
      });
        modalRef.componentInstance.title = 'Brisanje apoenske strukture';
        modalRef.componentInstance.description = `Jeste li sigurni da želite obrisati valutu pod nazivom ${row.name}  sa popisa?`;
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
      /* #endregion */
    }
  } 
}
