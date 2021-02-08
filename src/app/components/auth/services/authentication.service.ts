import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ILoginRequest } from '../models/requests/login-request';
import { Observable } from 'rxjs';
import { ILoginResponse } from '../models/responses/login-response';
import { tap } from 'rxjs/operators';
import { UrlHelperService } from 'src/app/shared/services/url-helper.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  /* #region  Service variables */
  private readonly CONTROLLER_NAME = 'login';
  isLoaderActive: boolean = false;
  /* #endregion */

  /* #region  Constructor */
  constructor(
    private _urlHelper: UrlHelperService,
    private _http: HttpClient,
    private _router: Router
  ) { }
  /* #endregion */

  /* #region  Service methods */

  // Login method
  login(loginForm):
    void // Observable<ILoginResponse>
  {
    this.isLoaderActive = true;
    const loginRequest: ILoginRequest = {
      userName: loginForm,
      password: loginForm
    };
    this._router.navigate(['naslovna']);
    // const url = this._urlHelper.getUrl(this.CONTROLLER_NAME, 'something');
    // return this._http.post<ILoginResponse>(url, loginRequest).pipe(
    //   tap(() => this.isLoaderActive = false)
    // );
  }
  /* #endregion */
}
