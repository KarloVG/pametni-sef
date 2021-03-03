import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ILocationResponse } from '../models/response/location-response';

@Component({
  selector: 'app-modal-aoe-location',
  templateUrl: './modal-aoe-location.component.html',
  styleUrls: ['./modal-aoe-location.component.scss']
})
export class ModalAoeLocationComponent implements OnInit {

  @Input() row: ILocationResponse;
  locationGroup: FormGroup;

  constructor(
    private _modalService: NgbActiveModal,
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.setUpFormGroup();
  }

  setUpFormGroup(): void {
    if (this.row) {
      this.locationGroup = this._formBuilder.group({
        description: [this.row.description, Validators.required],
        address: [this.row.address, Validators.required],
        companyName: [ this.row.companyName, Validators.required]
      })
    } else {
      this.locationGroup = this._formBuilder.group({
        description: ['', Validators.required],
        address: ['', Validators.required],
        companyName: ['', Validators.required]
      })
    }
  }

  modalClose(reason): void {
    this._modalService.close(reason);
  }

  get description(): AbstractControl | null { return this.locationGroup.get('description'); }
  get address(): AbstractControl | null { return this.locationGroup.get('address'); }
  get companyName(): AbstractControl | null { return this.locationGroup.get('companyName')}
}
