import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NotificationService } from '../notification.service';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  /* #region  constructor */
  constructor(
    private _notificationService: NotificationService
  ) { }
  /* #endregion */

  /* #region  intercept */
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          this._notificationService.fireErrorNotification("Pogeška", error.message);
          return throwError(error.message);
        })
      );
  }

  /* #endregion */
}
