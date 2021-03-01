import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TableColumn } from '@swimlane/ngx-datatable';
import { LanguageDeterminator } from 'src/app/shared/services/utils/language-determinator';
import { IBankResponse } from '../models/response/bank-response';
import { CUMULATIVE_ORDER_CRO, CUMULATIVE_ORDER_ENG } from 'src/app/components/administration/bank/models/cumulative-order-columns';
import { ICumulativeOrderResponse } from 'src/app/components/administration/bank/models/response/cumulative-order-response';

@Component({
  selector: 'app-modal-cumulative-order',
  templateUrl: './modal-cumulative-order.component.html',
  styleUrls: ['./modal-cumulative-order.component.scss']
})
export class ModalCumulativeOrderComponent implements OnInit {
  /* #region  Variables */
  @Input() row: IBankResponse;
  cumulativeOrderGroup: FormGroup;
  currentLang: string;
  isAddOrEdit: boolean = false;
  mainTableColumns: TableColumn[] = [];
  cumulativeOrders: ICumulativeOrderResponse[] = [
    {
      id: 1,
      name: 'Konfiguracija 123',
      userName: 'mmarkovic',
      serverIP: '127.0.0.1',
      port: 22,
      serverPath: 'securitas.private.key',
      privateKeyPassword: null,
      isSFTPAuthorization: true,
      serverPassword: null,
      fileSigningCertificate: 'example.securitas.cer',
      authorityCertificate: 'example2.securitas.cer',
      signingMethod: 'MIME',
      orderFilePath: 'C:/users/admin/files/',
      timeFrom: '2021-02-25T08:55:07.789Z',
      timeTo: '2021-02-25T022:55:07.789Z'
    }
  ];
  isPrivateKeyUnsecure: boolean = false;
  isServerPasswordUnsecure: boolean = false;
  /* #endregion */

  /* #region  Constructor */
  constructor(
    private _formBuilder: FormBuilder,
    private _modal: NgbActiveModal,
    private _languageDeterminator: LanguageDeterminator
  ) {
    this._languageDeterminator.currentActiveLanguage$.subscribe(
      data => {
        this.currentLang = data;
        this.mainTableColumns = this.currentLang === 'hr' ? CUMULATIVE_ORDER_CRO : CUMULATIVE_ORDER_ENG;
      }
    )
  }
  /* #endregion */

  /* #region  Methods */
  ngOnInit(): void {
    this.setUpFormGroup();
    console.log(this.row)
  }

  setUpFormGroup(): void {
    this.cumulativeOrderGroup = this._formBuilder.group({
      name: ['', Validators.required],
      serverPath: ['', Validators.required],
      privateKeyPassword: ['', Validators.required],
      isSFTPAuthorization: [false],
      userName: ['', Validators.required],
      serverPassword: ['', Validators.required],
      fileSigningCertificate: ['', Validators.required],
      authorityCertificate: ['', Validators.required],
      signingMethod: ['', Validators.required],
      serverIP: ['', Validators.required],
      port: ['', [Validators.required, Validators.pattern('^[0-9]{1,5}$')]],
      orderFilePath: ['', Validators.required],
      timeFrom: ['', Validators.required],
      timeTo: ['', Validators.required]
    })
  }

  addOrEditCumulativeOrder(tableRow?: ICumulativeOrderResponse): void {
    this.isAddOrEdit = true;
    if (tableRow) {
      this.cumulativeOrderGroup.patchValue({
        name: tableRow.name,
      });
    } else {
      this.cumulativeOrderGroup.reset();
    }
  }

  modalClose(reson): void {
    this._modal.close(reson)
  }
  /* #endregion */

  /* #region  Abstract controls */
  get name(): AbstractControl { return this.cumulativeOrderGroup.get('name'); }
  get serverPath(): AbstractControl { return this.cumulativeOrderGroup.get('serverPath'); }
  get privateKeyPassword(): AbstractControl { return this.cumulativeOrderGroup.get('privateKeyPassword'); }
  get isSFTPAuthorization(): AbstractControl { return this.cumulativeOrderGroup.get('isSFTPAuthorization'); }
  get userName(): AbstractControl { return this.cumulativeOrderGroup.get('userName'); }
  get serverPassword(): AbstractControl { return this.cumulativeOrderGroup.get('serverPassword'); }
  get fileSigningCertificate(): AbstractControl { return this.cumulativeOrderGroup.get('fileSigningCertificate'); }
  get authorityCertificate(): AbstractControl { return this.cumulativeOrderGroup.get('authorityCertificate'); }
  get signingMethod(): AbstractControl { return this.cumulativeOrderGroup.get('signingMethod'); }
  get serverIP(): AbstractControl { return this.cumulativeOrderGroup.get('serverIP'); }
  get port(): AbstractControl { return this.cumulativeOrderGroup.get('port'); }
  get orderFilePath(): AbstractControl { return this.cumulativeOrderGroup.get('orderFilePath'); }
  get timeFrom(): AbstractControl { return this.cumulativeOrderGroup.get('timeFrom'); }
  get timeTo(): AbstractControl { return this.cumulativeOrderGroup.get('timeTo'); }

  /* #endregion */
}
