import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TableColumn } from '@swimlane/ngx-datatable';
import { IWebServiceResponse } from 'src/app/components/administration/bank/models/response/web-service-response';
import { LanguageDeterminator } from 'src/app/shared/services/utils/language-determinator';
import { WEB_SERVICE_CRO, WEB_SERVICE_ENG } from 'src/app/components/administration/bank/models/web-service-columns'
import { IBankResponse } from '../models/response/bank-response';

@Component({
  selector: 'app-modal-aoe-web-service',
  templateUrl: './modal-aoe-web-service.component.html',
  styleUrls: ['./modal-aoe-web-service.component.scss']
})
export class ModalAoeWebServiceComponent implements OnInit {
  /* #region  VariWhen the gearbox option is engagedables */
  @Input() row: IBankResponse;
  webServiceGroup: FormGroup;
  currentLang: string;
  isAddOrEdit: boolean = false;
  mainTableColumns: TableColumn[] = [];
  webServices: IWebServiceResponse[] = [
    {
      id: 1,
      name: 'Primjer naziva Web Servisa',
      address: 'https://securitas.com/pametni-sefovi/api',
      class: 'securitas-klasa',
      isSOAPMessageActive: true,
      keystorePath: 'C://users/keystore/path/123',
      keystorePassword: 'dasdsadada',
      privateKeyAlias: 'key-alias-123',
      isSendMailActive: true,
      isUserCreateActive: true,
      timeFrom: { hour: 12, minute: 23 },
      timeTo: { hour: 23, minute: 23 }
    }
  ];
  isKeystorePasswordUnsecure: boolean = false;
  isDeleteActive: boolean = false;
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
        this.mainTableColumns = this.currentLang === 'hr' ? WEB_SERVICE_CRO : WEB_SERVICE_ENG;
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
    this.webServiceGroup = this._formBuilder.group({
      name: ['', [Validators.required]],
      address: ['', [Validators.required]],
      class: ['', [Validators.required]],
      isSOAPMessageActive: [false],
      keystorePath: [''],
      keystorePassword: [''],
      privateKeyAlias: [''],
      isSendMailActive: [false],
      isUserCreateActive: [false],
      timeFrom: [null, Validators.required],
      timeTo: [null, Validators.required]
    })
  }

  addOrEditWebService(tableRow?: IWebServiceResponse): void {
    this.isAddOrEdit = true;
    this.isDeleteActive = false;
    if (tableRow) {
      this.webServiceGroup.patchValue({
        name: tableRow.name,
        address: tableRow.address,
        class: tableRow.class,
        isSOAPMessageActive: tableRow.isSOAPMessageActive,
        keystorePath: tableRow.keystorePath ?? '',
        keystorePassword: tableRow.keystorePassword ?? '',
        privateKeyAlias: tableRow.privateKeyAlias ?? '',
        isSendMailActive: tableRow.isSendMailActive,
        isUserCreateActive: tableRow.isUserCreateActive,
        timeFrom: tableRow.timeFrom,
        timeTo: tableRow.timeTo
      });
    } else {
      this.webServiceGroup.reset();
    }
  }

  deleteWebService(tableRow: IWebServiceResponse): void {
    this.isDeleteActive = true;
    this.webServiceGroup.patchValue({
      name: tableRow.name,
      address: tableRow.address,
      class: tableRow.class,
      isSOAPMessageActive: tableRow.isSOAPMessageActive,
      keystorePath: tableRow.keystorePath ?? '',
      keystorePassword: tableRow.keystorePassword ?? '',
      privateKeyAlias: tableRow.privateKeyAlias ?? '',
      isSendMailActive: tableRow.isSendMailActive,
      isUserCreateActive: tableRow.isUserCreateActive,
      timeFrom: tableRow.timeFrom,
      timeTo: tableRow.timeTo
    });
  }

  modalClose(reson): void {
    this._modal.close(reson)
  }
  /* #endregion */

  /* #region  Abstract controls */
  get name(): AbstractControl { return this.webServiceGroup.get('name'); }
  get address(): AbstractControl { return this.webServiceGroup.get('address'); }
  get class(): AbstractControl { return this.webServiceGroup.get('class'); }
  get isSOAPMessageActive(): AbstractControl { return this.webServiceGroup.get('isSOAPMessageActive'); }
  get keystorePath(): AbstractControl { return this.webServiceGroup.get('keystorePath'); }
  get keystorePassword(): AbstractControl { return this.webServiceGroup.get('keystorePassword'); }
  get privateKeyAlias(): AbstractControl { return this.webServiceGroup.get('privateKeyAlias'); }
  get isSendMailActive(): AbstractControl { return this.webServiceGroup.get('isSendMailActive'); }
  get isUserCreateActive(): AbstractControl { return this.webServiceGroup.get('isUserCreateActive'); }
  get timeFrom(): AbstractControl { return this.webServiceGroup.get('timeFrom'); }
  get timeTo(): AbstractControl { return this.webServiceGroup.get('timeTo'); }
  /* #endregion */
}
