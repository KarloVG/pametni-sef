import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { IApoenResponse } from '../models/response/apoen-response';
import { ICurrencyTypeResponse } from '../models/response/currency-type-response';

@Component({
  selector: 'app-modal-aoe-apoen',
  templateUrl: './modal-aoe-apoen.component.html',
  styleUrls: ['./modal-aoe-apoen.component.scss']
})
export class ModalAoeApoenComponent implements OnInit {

  @Input() apoen: IApoenResponse;
  controlApoenGroup: FormGroup;

  currentLang: string;
  currencyType: ICurrencyTypeResponse[] = [
    {
      id: 1,
      name: 'Novčanice'
    },
    {
      id:2,
      name:'Kovanice'
    }
  ]

  constructor(
    private _formBuilder: FormBuilder,
    private _modal: NgbActiveModal
  ) {}

  ngOnInit(): void {
    this.setUpFormGroup();
    console.log(this.apoen)
  }

  setUpFormGroup(): void{
    if(this.apoen){
      this.controlApoenGroup = this._formBuilder.group({
        name: [this.apoen.name, Validators.required],
        value: [this.apoen.value,[Validators.required, Validators.pattern('^[0-9]*$')]],
        type: [this.apoen.type.name, Validators.required]
        // type: [this.apoen.type.name, Validators.required]
      })
    } else {
      this.controlApoenGroup = this._formBuilder.group({
        name: ['', Validators.required],
        value: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
        type: ['', Validators.required]
      })
    }
  }
  
  modalClose(reason): void {
    this._modal.close(reason)
  }

  get name(): AbstractControl { return this.controlApoenGroup.get('name');}
  get value(): AbstractControl { return this.controlApoenGroup.get('value');}
  get type(): AbstractControl { return this.controlApoenGroup.get('type');}

}
