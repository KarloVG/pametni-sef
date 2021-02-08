import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { exhaustMap, take } from 'rxjs/operators';
import { ILoginResponse } from '../models/responses/login-response';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  /* #region  Component variables */
  loginForm: FormGroup;
  /* #endregion */

  /* #region   Constructor*/
  constructor(
    private _fb: FormBuilder,
    public _authenticationService: AuthenticationService,
    private _router: Router
  ) { }
  /* #endregion */

  /* #region  Component methods */
  ngOnInit(): void {
    this.setUpFormGroup();
  }

  // Initialize form group for login
  setUpFormGroup(): void {
    this.loginForm = this._fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  // Login method
  login(): void {
    if (this.loginForm.valid) {
      if (this.loginForm.dirty) {
        this._router.navigate(["naslovna"]);
        // this._authenticationService.login(this.loginForm.value).pipe(take(1)).
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
  get email(): AbstractControl | null { return this.loginForm.get('email'); }
  get password(): AbstractControl | null { return this.loginForm.get('password'); }
  /* #endregion */
}
