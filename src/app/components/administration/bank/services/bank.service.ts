import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlHelperService } from 'src/app/shared/services/url-helper.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { IFleksbitReponse } from 'src/app/shared/models/fleksbit-response';
import { IBankRequest } from '../models/request/bank-request';

@Injectable({
  providedIn: 'any',
})
export class BankService {

  /* #region  Variables */
  private readonly CONTROLLER_NAME = 'Bank';
  loader: NgxSpinnerService;
  banks$ = this._http.get<IFleksbitReponse<any>>(this.getBanksURL()).pipe(
    map(res => res.response),
    tap(res => console.log("Get all banks", res)),
    catchError(error => this.handleError(error))
  );
  /* #endregion */

  /* #region  Constructor */
  constructor(
    private _urlHelper: UrlHelperService,
    private _http: HttpClient,
    private _ngxSpinnerService: NgxSpinnerService
  ) {
    this.loader = this._ngxSpinnerService;
  }
  /* #endregion */

  /* #region Methods */
  // get control centers
  getBanksURL(): string {
    return this._urlHelper.getUrl(this.CONTROLLER_NAME, 'getAllBanks');
  }

  // add bank
  addBank(bankRequest: IBankRequest):
    Observable<any> {
    this.loader.show();
    const request: IBankRequest = {
      name: bankRequest.name
    }
    const url = this._urlHelper.getUrl(this.CONTROLLER_NAME, 'addBank');
    return this._http.post<any>(url, request).pipe(
      tap(() => this.loader.hide()),
      catchError(error => this.handleError(error, this.loader))
    );
  }

  // edit bank
  editBank(bankRequest: IBankRequest):
    Observable<any> {
    this.loader.show();
    const request: IBankRequest = {
      id: bankRequest.id,
      name: bankRequest.name
    }
    const url = this._urlHelper.getUrl(this.CONTROLLER_NAME, 'updateBank', bankRequest.id.toString());
    return this._http.post<any>(url, request).pipe(
      tap(() => this.loader.hide()),
      catchError(error => this.handleError(error, this.loader))
    );
  }

  // edit control center
  delete(id: number):
    Observable<any> {
    this.loader.show();
    const url = this._urlHelper.getUrl(this.CONTROLLER_NAME, 'deleteBank', id.toString());
    return this._http.delete<any>(url).pipe(
      tap(() => this.loader.hide()),
      catchError(error => this.handleError(error, this.loader))
    );
  }

  private handleError(err: any, loader?: NgxSpinnerService): Observable<never> {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      errorMessage = err.error.errorMessage;
    }
    if (loader) loader.hide();
    return throwError(errorMessage);
  }
  /* #endregion */
}
