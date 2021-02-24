import { Component, OnInit } from '@angular/core';
import { TableColumn } from '@swimlane/ngx-datatable';
import { BehaviorSubject } from 'rxjs';
import { LanguageDeterminator } from 'src/app/shared/services/utils/language-determinator';
import { CURRENCY_CRO, CURRENCY_ENG } from '../models/currency-columns';
import { DEVICES_CRO, DEVICES_ENG } from '../models/devices-column';
import { ICurrency } from '../models/response/currency-response';

@Component({
  selector: 'app-currency-overview',
  templateUrl: './currency-overview.component.html',
  styleUrls: ['./currency-overview.component.scss']
})
export class CurrencyOverviewComponent implements OnInit {

  currentLang: string;
  mainTableColumns: TableColumn[] = [];
  altTableColumns: TableColumn[]= [];
  currencies: ICurrency[] = [
    {
      id:1,
      name: 'HRK',
      ratio: 1
    },
    {
      id:2,
      name: 'EUR',
      ratio: 7.5
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
      currency: 'HRK'
    },
    {
      id: 2,
      transactionId: 567576,
      name: 'Uređaj 654',
      locationName: 'Zaseok',
      companyName: 'Špar d.o.o',
      status: 'Aktivan',
      type: 'Uređaj za depozit - MEI',
      currency: 'HRK'
    }
  ];


  private mainTableClickedSubject = new BehaviorSubject<boolean>(false);
  mainTableClickedAction$ = this.mainTableClickedSubject.asObservable();

  constructor(
    private _languageDeterminator: LanguageDeterminator
  ) {
    this._languageDeterminator.currentActiveLanguage$.subscribe(
      data => {
        this.currentLang = data;
        this.mainTableColumns = this.currentLang === 'hr' ? CURRENCY_CRO : CURRENCY_ENG;
        this.altTableColumns = this.currentLang === 'hr' ? DEVICES_CRO : DEVICES_ENG;
      }
    )
  }

  ngOnInit(): void {
  }

  onClickMainTableRow(event): void {
    if (event.type === 'click') {
      this.mainTableClickedSubject.next(true);
    }
  }

}
