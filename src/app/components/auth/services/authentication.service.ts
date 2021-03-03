import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ILoginRequest } from '../models/requests/login-request';
import { Observable, throwError } from 'rxjs';
import { ILoginResponse } from '../models/responses/login-response';
import { catchError, tap } from 'rxjs/operators';
import { UrlHelperService } from 'src/app/shared/services/url-helper.service';
import { Router } from '@angular/router';
import { IFleksbitReponse } from 'src/app/shared/models/fleksbit-response';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  /* #region  Service variables */
  private readonly CONTROLLER_NAME = 'account';
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
  login(loginForm: ILoginRequest): Observable<IFleksbitReponse<ILoginResponse>> {
    this.isLoaderActive = true;
    const loginRequest: ILoginRequest = {
      email: loginForm.email,
      password: loginForm.password
    };
    const url = this._urlHelper.getUrl(this.CONTROLLER_NAME, 'login');
    return this._http.post<any>(url, loginRequest).pipe(
      catchError(this.handleError)
    );
  }

  resetPassword(email: string): Observable<IFleksbitReponse<any>> {
    this.isLoaderActive = true;
    const url = this._urlHelper.getUrl(this.CONTROLLER_NAME, 'forgotPassword');
    return this._http.post<any>(url, { email: email }).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(err: any): Observable<never> {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      errorMessage = err.error.errorMessage;
    }
    return throwError(errorMessage);
  }
  /* #endregion */
}
