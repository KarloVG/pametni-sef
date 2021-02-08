import {
  HttpClient,
  HttpErrorResponse
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { UrlHelperService } from 'src/app/shared/services/url-helper.service';


@Injectable({
  providedIn: 'root',
})
export class ApplicationWizardService {
  /* #region  Variables */
  private readonly CONTROLLER_NAME = '....';
  /* #endregion */

  /* #region  Constructor */
  constructor(
    private readonly _http: HttpClient,
    private readonly _urlHelper: UrlHelperService
  ) { }
  /* #endregion */

  /* #region  Methods */

  // Remove file
  removeFile(id: string): Observable<any> {
    const url = this._urlHelper.getUrl('Remove file', id);
    return this._http
      .delete<any>(url)
      .pipe(
        tap((data) => console.log('Remove file', data)),
        catchError(this.handleError)
      );
  }

  // Remove before production
  private handleError(err: HttpErrorResponse): Observable<never> {
    const { error } = err;
    // instead of logging infrastructore on BE, just log it to the console
    let errorMessage: string;
    if (error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `Došlo je do frontend pogreške: ${error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = error.error.message;
    }
    return throwError(errorMessage);
  }
  /* #endregion */
}
