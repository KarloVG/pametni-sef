import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { exhaustMap, take } from 'rxjs/operators';
import { LocalStorageService } from 'src/app/shared/services/authorization/local-storage.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { ILoginResponse } from '../models/responses/login-response';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  /* #region  Component variables */
  resetPwdGroup: FormGroup;
  /* #endregion */

  /* #region   Constructor*/
  constructor(
    private _fb: FormBuilder,
    public _authenticationService: AuthenticationService,
    private _router: Router,
    private _localStorageService: LocalStorageService,
    private readonly _notificationService: NotificationService
  ) { }
  /* #endregion */

  /* #region  Component methods */
  ngOnInit(): void {
    this.setUpFormGroup();
  }

  // Initialize form group for login
  setUpFormGroup(): void {
    this.resetPwdGroup = this._fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  // Login method
  login(): void {
    if (this.resetPwdGroup.valid) {
      if (this.resetPwdGroup.dirty) {
        // todo set role & bearer token
        // this._router.navigate(["/prijava"]);
        this._notificationService.fireSuccessMessage('Uspjeh', 'Provjerite poštanski sandučić. Mail je poslan.')
        // this._authenticationService.login(this.resetPwdGroup.value).pipe(take(1)).
        //   subscribe(
        //     (data: ILoginResponse) => {
        //       this._router.navigate(["/dashboard"]);
        //     },
        //     (error: Error) => {
        //       console.log(error)
        //     }
        //   );
      }
    } else {
      // activate form.submitted
      return;
    }
  }
  /* #endregion */

  /* #region  Abstract controls */
  get email(): AbstractControl | null { return this.resetPwdGroup.get('email'); }
  /* #endregion */
}
