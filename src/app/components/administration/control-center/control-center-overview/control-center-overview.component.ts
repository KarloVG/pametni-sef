import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TableColumn } from '@swimlane/ngx-datatable';
import { BehaviorSubject } from 'rxjs';
import { LanguageDeterminator } from 'src/app/shared/services/utils/language-determinator';
import { CONTROL_CENTERS_CRO, CONTROL_CENTERS_ENG } from '../models/control-center-columns';
import { DEVICES_CRO, DEVICES_ENG } from '../models/devices-columns';
import { IControlCenterResponse } from '../models/response/control-center-response';

@Component({
  selector: 'app-control-center-overview',
  templateUrl: './control-center-overview.component.html',
  styleUrls: ['./control-center-overview.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
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
    private _languageDeterminator: LanguageDeterminator
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
  /* #endregion */
}
