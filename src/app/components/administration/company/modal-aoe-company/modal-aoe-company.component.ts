import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EMPTY } from 'rxjs';
import { catchError, take } from 'rxjs/operators';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { ICompanyResponse } from '../models/response/company-response';
import { CompanyService } from '../services/company.service';

@Component({
  selector: 'app-modal-aoe-company',
  templateUrl: './modal-aoe-company.component.html',
  styleUrls: ['./modal-aoe-company.component.scss']
})
export class ModalAoeCompanyComponent implements OnInit {

  @Input() row: ICompanyResponse;
  companyGroup: FormGroup;

  constructor(
    public _modalService: NgbActiveModal,
    private _formBuilder: FormBuilder,
    private _companyService: CompanyService,
    private _notificationService: NotificationService
  ) { }

  ngOnInit(): void {
    this.setUpFormGroup();
  }

  setUpFormGroup(): void {
    if (this.row) {
      this.companyGroup = this._formBuilder.group({
        id: this.row.id,
        name: [this.row.name, Validators.required],
        address: [this.row.address, Validators.required],
        headquarters: [this.row.headquarters, Validators.required],
        identificationNumber: this.row.identificationNumber,
        isAdmin: this.row.isAdmin,
        jointOrderFilename: this.row.jointOrderFilename
      })
    } else {
      this.companyGroup = this._formBuilder.group({
        name: ['', Validators.required],
        address: ['', Validators.required],
        headquarters: ['', Validators.required],
        identificationNumber: '',
        isAdmin: false,
        jointOrderFilename: ''
      })
    }
  }

  onSubmit(): void {
    if (this.companyGroup.invalid) return;
    if (this.companyGroup.dirty) {
      if (this.row) {
        this._companyService.editCompany(this.companyGroup.value).pipe(
          take(1),
          catchError(err => {
            this._notificationService.fireErrorNotification("Greška", err);
            return EMPTY;
          })
        ).subscribe(
          data => {
            this.modalClose(true);
          }
        )
      } else {
        this._companyService.addCompany(this.companyGroup.value).pipe(
          take(1),
          catchError(err => {
            this._notificationService.fireErrorNotification("Greška", err);
            return EMPTY;
          })
        ).subscribe(
          data => {
            this.modalClose(true);
          }
        )
      }
    } else {
      this._modalService.dismiss('cancel');
    }
  }

  modalClose(reason): void {
    this._modalService.close(reason);
  }

  get name(): AbstractControl | null { return this.companyGroup.get('name'); }
  get address(): AbstractControl | null { return this.companyGroup.get('address'); }
  get headquarters(): AbstractControl | null { return this.companyGroup.get('headquarters'); }
  get identificationNumber(): AbstractControl | null { return this.companyGroup.get('identificationNumber'); }
}
