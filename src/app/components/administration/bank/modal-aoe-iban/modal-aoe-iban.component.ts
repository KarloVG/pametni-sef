import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TableColumn } from '@swimlane/ngx-datatable';
import { LanguageDeterminator } from 'src/app/shared/services/utils/language-determinator';
import { IBankResponse } from '../models/response/bank-response';
import { IBAN_CRO, IBAN_ENG } from 'src/app/components/administration/bank/models/iban-columns';
import { IIBANResponse } from 'src/app/components/administration/bank/models/response/iban-response';

@Component({
  selector: 'app-modal-aoe-iban',
  templateUrl: './modal-aoe-iban.component.html',
  styleUrls: ['./modal-aoe-iban.component.scss']
})
export class ModalAoeIbanComponent implements OnInit {
  /* #region  Variables */
  @Input() row: IBankResponse;
  ibanGroup: FormGroup;
  currentLang: string;
  isAddOrEdit: boolean = false;
  mainTableColumns: TableColumn[] = [];
  ibanList: IIBANResponse[] = [
    {
      id: 1,
      description: 'Primjer kratkog opisa',
      iban: 'HR1723600001101234565',
      companyName: 'Špar d.o.o'
    }
  ];
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
        this.mainTableColumns = this.currentLang === 'hr' ? IBAN_CRO : IBAN_ENG;
        console.log(this.mainTableColumns)
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
    this.ibanGroup = this._formBuilder.group({
      description: ['', Validators.required],
      iban: ['', [Validators.required, Validators.minLength(21), Validators.maxLength(21), Validators.pattern('^HR[0-9]{19}$')]],
      companyName: ['']
    })
  }

  addOrEditIBAN(tableRow?: IIBANResponse): void {
    this.isAddOrEdit = true;
    if (tableRow) {
      this.ibanGroup.patchValue({
        description: tableRow.description,
        iban: tableRow.iban,
        companyName: tableRow.companyName
      });
    } else {
      this.ibanGroup.reset();
    }
  }

  modalClose(reson): void {
    this._modal.close(reson)
  }
  /* #endregion */

  /* #region  Abstract controls */
  get description(): AbstractControl { return this.ibanGroup.get('description'); }
  get iban(): AbstractControl { return this.ibanGroup.get('iban'); }
  get companyName(): AbstractControl { return this.ibanGroup.get('companyName'); }
  /* #endregion */
}
