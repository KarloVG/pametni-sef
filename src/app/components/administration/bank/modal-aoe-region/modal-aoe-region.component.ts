import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TableColumn } from '@swimlane/ngx-datatable';
import { LanguageDeterminator } from 'src/app/shared/services/utils/language-determinator';
import { IBankResponse } from '../models/response/bank-response';
import { REGION_CRO, REGION_ENG } from 'src/app/components/administration/bank/models/region-columns';
import { IRegionResponse } from 'src/app/components/administration/bank/models/response/region-response';

@Component({
  selector: 'app-modal-aoe-region',
  templateUrl: './modal-aoe-region.component.html',
  styleUrls: ['./modal-aoe-region.component.scss']
})
export class ModalAoeRegionComponent implements OnInit {
  /* #region  Variables */
  @Input() row: IBankResponse;
  regionGroup: FormGroup;
  currentLang: string;
  isAddOrEdit: boolean = false;
  isDeleteActive: boolean = false;
  mainTableColumns: TableColumn[] = [];
  regions: IRegionResponse[] = [
    {
      id: 1,
      name: 'Regija 123123'
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
        this.mainTableColumns = this.currentLang === 'hr' ? REGION_CRO : REGION_ENG;
      }
    )
  }
  /* #endregion */

  /* #region  Methods */
  ngOnInit(): void {
    this.setUpFormGroup();
  }

  setUpFormGroup(): void {
    this.regionGroup = this._formBuilder.group({
      name: ['', Validators.required],
    })
  }

  addOrEditRegion(tableRow?: IRegionResponse): void {
    this.isAddOrEdit = true;
    this.isDeleteActive = false;
    if (tableRow) {
      this.regionGroup.patchValue({
        name: tableRow.name
      });
    } else {
      this.regionGroup.reset();
    }
  }

  deleteRegion(tableRow: IRegionResponse): void {
    this.isDeleteActive = true;
    this.regionGroup.patchValue({
      name: tableRow.name
    });
  }

  modalClose(reson): void {
    this._modal.close(reson)
  }
  /* #endregion */

  /* #region  Abstract controls */
  get name(): AbstractControl { return this.regionGroup.get('name'); }
  /* #endregion */
}
