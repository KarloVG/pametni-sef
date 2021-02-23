import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { ICompanyResponse } from '../models/response/company-response';

@Component({
  selector: 'app-modal-aoe-company',
  templateUrl: './modal-aoe-company.component.html',
  styleUrls: ['./modal-aoe-company.component.scss']
})
export class ModalAoeCompanyComponent implements OnInit {

  @Input() row: ICompanyResponse;
  companyGroup: FormGroup;

  constructor(
    private _modalService: NgbActiveModal,
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.setUpFormGroup();
  }

  setUpFormGroup(): void {
    if (this.row) {
      this.companyGroup = this._formBuilder.group({
        name: [this.row.name, Validators.required],
        address: [this.row.address, Validators.required],
        headquater: [this.row.headquarters, Validators.required],
        identificator: [this.row.identificator]
      })
    } else {
      this.companyGroup = this._formBuilder.group({
        name: ['', Validators.required],
        address: ['', Validators.required],
        headquater: ['', Validators.required],
        identificator: ['']
      })
    }
  }

  modalClose(reason): void {
    this._modalService.close(reason);
  }

  get name(): AbstractControl | null { return this.companyGroup.get('name'); }
  get address(): AbstractControl | null { return this.companyGroup.get('address'); }
  get headquater(): AbstractControl | null { return this.companyGroup.get('headquater'); }
  get identificator(): AbstractControl | null { return this.companyGroup.get('identificator'); }
}
