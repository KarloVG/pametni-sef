import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-control-center-detail',
  templateUrl: './control-center-detail.component.html',
  styleUrls: ['./control-center-detail.component.scss']
})
export class ControlCenterDetailComponent implements OnInit {

  /* #region  Variables */
  controlCenterGroup: FormGroup;
  /* #endregion */

  /* #region  Constructor */
  constructor(
    private _formBuilder: FormBuilder,
    // public _controlCenterService: ControlCenterService
  ) { }
  /* #endregion */

  /* #region  Methods */
  ngOnInit(): void {
    this.setUpFormGroup();
  }

  addOrEditControlCenter(): void {
  }

  setUpFormGroup(): void {
    this.controlCenterGroup = this._formBuilder.group({
      name: ['', Validators.required],
      mailList: ['', Validators.required]
    });
  }
  /* #endregion */

  /* #region  Abstract controls */
  get name(): AbstractControl { return this.controlCenterGroup.get('name'); }
  get mailList(): AbstractControl { return this.controlCenterGroup.get('mailList'); }
  /* #endregion */
}
