import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ICurrencyResponse } from '../models/response/currency-response';

@Component({
  selector: 'app-modal-aoe-currency',
  templateUrl: './modal-aoe-currency.component.html',
  styleUrls: ['./modal-aoe-currency.component.scss']
})
export class ModalAoeCurrencyComponent implements OnInit {

  @Input() row: ICurrencyResponse;
  controlCurrencyGroup: FormGroup;

  currentLang: string;

  constructor(
    private _formBuilder: FormBuilder,
    private _modal: NgbActiveModal
  ) {}

  ngOnInit(): void {
    this.setUpFormGroup();
    console.log(this.row)
  }

  setUpFormGroup(): void{
    if(this.row){
      this.controlCurrencyGroup = this._formBuilder.group({
        name: [this.row.name, Validators.required],
        ratio: [this.row.ratio, Validators.required]
      })
    } else {
      this.controlCurrencyGroup = this._formBuilder.group({
        name: ['', Validators.required],
        ratio: ['', Validators.required]
      })
    }
  }

  modalClose(reason): void {
    this._modal.close(reason)
  }

  get name(): AbstractControl { return this.controlCurrencyGroup.get('name');}
  get ratio(): AbstractControl { return this.controlCurrencyGroup.get('ratio');}
}
 