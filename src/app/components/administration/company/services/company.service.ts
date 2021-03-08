import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlHelperService } from 'src/app/shared/services/url-helper.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { IFleksbitReponse } from 'src/app/shared/models/fleksbit-response';
import { ICompanyResponse } from '../models/response/company-response';
import { IPaginatedResponse } from 'src/app/shared/models/pagination/paginated-response';
import { IPaginationBase } from 'src/app/shared/models/pagination/base-pagination';
import { ICompanyRequest } from '../models/request/company-request';

@Injectable({
  providedIn: 'any',
})
export class CompanyService {

  /* #region  Variables */
  private readonly CONTROLLER_NAME = 'Company';
  loader: NgxSpinnerService;
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
  getCompaniesPaginated(controlCenterRequest): Observable<IPaginatedResponse<ICompanyResponse[]>> {
    const url: string = this._urlHelper.getUrl(this.CONTROLLER_NAME, 'getAllCompanies');
    const request: IPaginationBase = {
      page: controlCenterRequest.page,
      pageSize: controlCenterRequest.pageSize,
      searchString: controlCenterRequest.searchString,
      filtering: controlCenterRequest.filtering
    }
    return this._http.post<IFleksbitReponse<IPaginatedResponse<ICompanyResponse[]>>>(url, request).pipe(
      map(res => res.response),
      tap(res => console.log("Get all companies", res)),
      catchError(error => this.handleError(error))
    );
  }

  // add company
  addCompany(companyRequest: ICompanyRequest):
    Observable<IFleksbitReponse<boolean>> {
    this.loader.show();
    console.log(companyRequest)
    const url = this._urlHelper.getUrl(this.CONTROLLER_NAME, 'addCompany');
    return this._http.post<IFleksbitReponse<boolean>>(url, companyRequest).pipe(
      tap(() => this.loader.hide()),
      catchError(error => this.handleError(error, this.loader))
    );
  }

  // edit company
  editCompany(companyRequest: ICompanyRequest):
    Observable<IFleksbitReponse<boolean>> {
    this.loader.show();
    const url = this._urlHelper.getUrl(this.CONTROLLER_NAME, 'updateCompany', companyRequest.id.toString());
    return this._http.put<IFleksbitReponse<boolean>>(url, companyRequest).pipe(
      tap(() => this.loader.hide()),
      catchError(error => this.handleError(error, this.loader))
    );
  }

  // delete company
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
