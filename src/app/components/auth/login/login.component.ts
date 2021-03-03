import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, exhaustMap, map, take, tap } from 'rxjs/operators';
import { LocalStorageService } from 'src/app/shared/services/authorization/local-storage.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { AuthenticationService } from 'src/app/components/auth/services/authentication.service';
import { EMPTY, Subject } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit {

  /* #region  Component variables */
  loginForm: FormGroup;
  submit$: Subject<boolean> = new Subject();
  /* #endregion */

  /* #region   Constructor*/
  constructor(
    private _fb: FormBuilder,
    public _authenticationService: AuthenticationService,
    private _router: Router,
    private _localStorageService: LocalStorageService,
    private _notificationService: NotificationService
  ) { }
  /* #endregion */

  /* #region  Component methods */
  ngOnInit(): void {
    this.setUpFormGroup();
  }

  ngAfterViewInit() {
    this.submit$.pipe(
      exhaustMap(() => this._authenticationService.login(this.loginForm.value).pipe(
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
      this._localStorageService.set('is_authenticated', true);
      this._localStorageService.set('token', res.token);
      this._router.navigate(['naslovna']);
    });
  }

  // Initialize form group for login
  setUpFormGroup(): void {
    this.loginForm = this._fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  // Login method
  submit() {
    if (this.loginForm.invalid) {
      return;
    }
    this.submit$.next(true);
  }
  /* #endregion */

  /* #region  Abstract controls */
  get email(): AbstractControl | null { return this.loginForm.get('email'); }
  get password(): AbstractControl | null { return this.loginForm.get('password'); }
  /* #endregion */
}
