import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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


  setUpFormGroup(): void{
    this.controlCurrencyGroup = this._formBuilder.group({
      name: ['', Validators.required],
      ratio: ['', Validators.required]
    });
  }

  get name(): AbstractControl { return this.controlCurrencyGroup.get('name'); }
  get ratio(): AbstractControl { return this.controlCurrencyGroup.get('ratio'); }

}
