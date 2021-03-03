import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { EMPTY, Subject } from 'rxjs';
import { catchError, exhaustMap, map, take, tap } from 'rxjs/operators';
import { LocalStorageService } from 'src/app/shared/services/authorization/local-storage.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit, AfterViewInit {

  /* #region  Component variables */
  resetPwdGroup: FormGroup;
  submit$: Subject<boolean> = new Subject();
  /* #endregion */

  /* #region   Constructor*/
  constructor(
    private _fb: FormBuilder,
    public readonly _authenticationService: AuthenticationService,
    private readonly _router: Router,
    private readonly _notificationService: NotificationService
  ) { }
  /* #endregion */

  /* #region  Component methods */
  ngOnInit(): void {
    this.setUpFormGroup();
  }

  ngAfterViewInit() {
    this.submit$.pipe(
      exhaustMap(() => this._authenticationService.resetPassword(this.email.value).pipe(
        take(1),
        tap(() => this._authenticationService.isLoaderActive = false),
        map(response => response.response),
        catchError(err => {
          this._notificationService.fireErrorNotification("Greška", err);
          this._authenticationService.isLoaderActive = false;
          return EMPTY;
        })
      ))
    ).subscribe(res => {
      this._notificationService.fireSuccessMessage('Uspjeh', 'Provjerite poštanski sandučić. Mail je poslan.')
      this._router.navigate(["/prijava"]);
    });
  }

  // Initialize form group for reset pwd
  setUpFormGroup(): void {
    this.resetPwdGroup = this._fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  // Reset password method
  resetPassword(): void {
    if (this.resetPwdGroup.invalid) {
      return;
    }
    this.submit$.next(true);
  }
  /* #endregion */

  /* #region  Abstract controls */
  get email(): AbstractControl | null { return this.resetPwdGroup.get('email'); }
  /* #endregion */
}
