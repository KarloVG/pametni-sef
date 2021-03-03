import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlHelperService } from 'src/app/shared/services/url-helper.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { IControlCenterRequest } from '../models/request/control-center-request';
import { IControlCenterResponse } from '../models/response/control-center-response';
import { IFleksbitReponse } from 'src/app/shared/models/fleksbit-response';

@Injectable({
  providedIn: 'any',
})
export class ControlCenterService {

  /* #region  Variables */
  private readonly CONTROLLER_NAME = 'ControlCenter';
  loader: NgxSpinnerService;
  controlCenters$ = this._http.get<IFleksbitReponse<IControlCenterResponse[]>>(this.getControlCentersURL()).pipe(
    map(res => res.response),
    tap(res => console.log("Get all control centers", res)),
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
  getControlCentersURL(): string {
    return this._urlHelper.getUrl(this.CONTROLLER_NAME, 'getAllControllCenters');
  }

  // add control center
  addControlCenter(controlCenterRequest: IControlCenterRequest):
    Observable<any> {
    this.loader.show();
    const request = { ...controlCenterRequest, emailList: [controlCenterRequest.emailList] }
    const url = this._urlHelper.getUrl(this.CONTROLLER_NAME, 'addControlCenter');
    return this._http.post<any>(url, request).pipe(
      tap(() => this.loader.hide()),
      catchError(error => this.handleError(error, this.loader))
    );
  }

  // edit control center
  editControlCenter(controlCenterRequest: IControlCenterRequest):
    Observable<any> {
    this.loader.show();
    const url = this._urlHelper.getUrl(this.CONTROLLER_NAME, 'editControlCenter', controlCenterRequest.id.toString());
    return this._http.put<any>(url, controlCenterRequest).pipe(
      tap(() => this.loader.hide()),
      catchError(error => this.handleError(error, this.loader))
    );
  }

  // edit control center
  delete(id: number):
    Observable<any> {
    this.loader.show();
    const url = this._urlHelper.getUrl(this.CONTROLLER_NAME, 'deleteControlCenter', id.toString());
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
