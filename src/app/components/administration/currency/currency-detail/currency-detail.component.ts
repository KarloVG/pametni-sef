import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalApoenStructureComponent } from '../modal-apoen-structure/modal-apoen-structure.component';

@Component({
  selector: 'app-currency-detail',
  templateUrl: './currency-detail.component.html',
  styleUrls: ['./currency-detail.component.scss']
})
export class CurrencyDetailComponent implements OnInit {

  controlCurrencyGroup: FormGroup;

  constructor(
    private _modal: NgbModal,
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.setUpFormGroup();
  }

  addOrEditCurrency():void{}

  apoenStructure():void{
    const modal = this._modal.open(ModalApoenStructureComponent, {
      centered: true,
      backdrop: 'static',
      keyboard: false,
    });
}

  setUpFormGroup(): void{
    this.controlCurrencyGroup = this._formBuilder.group({
      name: ['', Validators.required],
      ratio: ['', Validators.required]
    });
  }

  get name(): AbstractControl { return this.controlCurrencyGroup.get('name'); }
  get ratio(): AbstractControl { return this.controlCurrencyGroup.get('ratio'); }

}
