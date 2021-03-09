import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EMPTY } from 'rxjs';
import { catchError, take } from 'rxjs/operators';
import { IDropdown } from 'src/app/shared/models/dropdown';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { CompanyService } from '../../company/services/company.service';
import { ILocationResponse } from '../models/response/location-response';
import { LocationService } from '../services/location.service';

@Component({
  selector: 'app-modal-aoe-location',
  templateUrl: './modal-aoe-location.component.html',
  styleUrls: ['./modal-aoe-location.component.scss']
})
export class ModalAoeLocationComponent implements OnInit {

  @Input() row: ILocationResponse;
  locationGroup: FormGroup;
  companies: IDropdown[] = [];

  constructor(
    public _modalService: NgbActiveModal,
    private _formBuilder: FormBuilder,
    private _locationService: LocationService,
    private _notificationService: NotificationService,
    private _companyService: CompanyService
  ) { }

  ngOnInit(): void {
    this.setUpFormGroup();
    this._companyService.getCompaniesDropdown().pipe(
      take(1),
      catchError(err => {
        this._notificationService.fireErrorNotification("Greška", err);
        return EMPTY;
      })
    ).subscribe(
      data => {
        this.companies = data;
        if (this.row) {
          this.locationGroup.patchValue({
            companyId: this.row.companyId
          })
        }
      }
    )
  }

  setUpFormGroup(): void {
    if (this.row) {
      this.locationGroup = this._formBuilder.group({
        id: this.row.id,
        name: [this.row.name, Validators.required],
        address: [this.row.address, Validators.required],
        companyId: [null, Validators.required]
      })
    } else {
      this.locationGroup = this._formBuilder.group({
        name: ['', Validators.required],
        address: ['', Validators.required],
        companyId: ['', Validators.required]
      })
    }
  }

  onSubmit(): void {
    if (this.locationGroup.invalid) return;
    if (this.locationGroup.dirty) {
      if (this.row) {
        this._locationService.editLocation(this.locationGroup.value).pipe(
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
        this._locationService.addLocation(this.locationGroup.value).pipe(
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

  get name(): AbstractControl | null { return this.locationGroup.get('name'); }
  get address(): AbstractControl | null { return this.locationGroup.get('address'); }
  get companyId(): AbstractControl | null { return this.locationGroup.get('companyId') }
}
