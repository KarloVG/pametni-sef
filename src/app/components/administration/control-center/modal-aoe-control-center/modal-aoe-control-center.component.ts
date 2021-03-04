import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EMPTY } from 'rxjs';
import { catchError, map, take } from 'rxjs/operators';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { IControlCenterResponse } from '../models/response/control-center-response';
import { ControlCenterService } from '../services/control-center.service';

@Component({
  selector: 'app-modal-aoe-control-center',
  templateUrl: './modal-aoe-control-center.component.html',
  styleUrls: ['./modal-aoe-control-center.component.scss']
})
export class ModalAoeControlCenterComponent implements OnInit {
  /* #region  Variables */
  @Input() row: IControlCenterResponse;
  controlCenterGroup: FormGroup;
  isSendTimeValidatorActive: boolean = false;
  /* #endregion */

  /* #region  Constructor */
  constructor(
    private _formBuilder: FormBuilder,
    private _modal: NgbActiveModal,
    public _controlCenterService: ControlCenterService,
    private _notificationService: NotificationService
  ) { }
  /* #endregion */

  /* #region  Methods */
  ngOnInit(): void {
    this.setUpFormGroup();
  }

  setUpFormGroup(): void {
    if (this.row) {
      this.controlCenterGroup = this._formBuilder.group({
        id: [this.row.id],
        name: [this.row.name, Validators.required],
        emailList: [this.row.emailList, Validators.required],
        sendDailyReport: [this.row.sendDailyReport],
        sendTime: [this.row.sendTime]
      })
    } else {
      this.controlCenterGroup = this._formBuilder.group({
        name: ['', Validators.required],
        emailList: ['', Validators.required],
        sendDailyReport: [false],
        sendTime: new Date().toISOString()
      })
    }

    this.sendDailyReport.valueChanges.subscribe(checked => {
      if (checked) {
        this.isSendTimeValidatorActive = true;
        this.sendTime.setValidators([Validators.required]);
      } else {
        this.isSendTimeValidatorActive = false;
        this.sendTime.setValidators(null);
      }
      this.sendTime.updateValueAndValidity();
    })
  }

  onSubmit(): void {
    if (this.row) {
      this._controlCenterService.editControlCenter(this.controlCenterGroup.value).pipe(
        take(1),
        map(response => response.response),
        catchError(err => {
          this._notificationService.fireErrorNotification("Greška", err);
          return EMPTY;
        })
      ).subscribe(() => {
        this._modal.close();
      }
      );
    } else {
      this._controlCenterService.addControlCenter(this.controlCenterGroup.value).pipe(
        take(1),
        catchError(err => {
          this._notificationService.fireErrorNotification("Greška", err);
          return EMPTY;
        })
      ).subscribe(() => {
        this._modal.close();
      }
      );
    }
  }

  modalClose(reson): void {
    this._modal.dismiss(reson)
  }
  /* #endregion */

  /* #region  Abstract controls */
  get name(): AbstractControl { return this.controlCenterGroup.get('name'); }
  get emailList(): AbstractControl { return this.controlCenterGroup.get('emailList'); }
  get sendDailyReport(): AbstractControl { return this.controlCenterGroup.get('sendDailyReport'); }
  get sendTime(): AbstractControl { return this.controlCenterGroup.get('sendTime'); }
  /* #endregion */
}
