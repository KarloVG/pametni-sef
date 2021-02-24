import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { IControlCenterResponse } from '../models/response/control-center-response';

@Component({
  selector: 'app-modal-aoe-control-center',
  templateUrl: './modal-aoe-control-center.component.html',
  styleUrls: ['./modal-aoe-control-center.component.scss']
})
export class ModalAoeControlCenterComponent implements OnInit {
  /* #region  Variables */
  @Input() row: IControlCenterResponse;
  controlCenterGroup: FormGroup;
  /* #endregion */

  /* #region  Constructor */
  constructor(
    private _formBuilder: FormBuilder,
    private _modal: NgbActiveModal
    // public _controlCenterService: ControlCenterService
  ) { }
  /* #endregion */

  /* #region  Methods */
  ngOnInit(): void {
    this.setUpFormGroup();
    console.log(this.row)
  }

  setUpFormGroup(): void {
    if (this.row) {
      const joinedMailList = this.row.mailList.length > 1 ? this.row.mailList.join(";") : this.row.mailList;
      this.controlCenterGroup = this._formBuilder.group({
        name: [this.row.name, Validators.required],
        mailList: [joinedMailList, Validators.required]
      })
    } else {
      this.controlCenterGroup = this._formBuilder.group({
        name: ['', Validators.required],
        mailList: ['', Validators.required]
      })
    }
  }

  modalClose(reson): void {
    this._modal.close(reson)
  }
  /* #endregion */

  /* #region  Abstract controls */
  get name(): AbstractControl { return this.controlCenterGroup.get('name'); }
  get mailList(): AbstractControl { return this.controlCenterGroup.get('mailList'); }
  /* #endregion */
}
