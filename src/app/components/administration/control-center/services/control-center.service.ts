import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlHelperService } from 'src/app/shared/services/url-helper.service';

@Injectable()
export class ControlCenterService {

  /* #region  Variables */
  private readonly CONTROLLER_NAME = 'control-center';
  isLoaderActive: boolean = false;
  /* #endregion */

  /* #region  Constructor */
  constructor(
    private _urlHelper: UrlHelperService,
    private _http: HttpClient
  ) { }
  /* #endregion */

  /* #region Methods */
  // get control centers
  getControlCenters(loginForm):
    void // Observable<ILoginResponse>
  {
    this.isLoaderActive = true;
    // const url = this._urlHelper.getUrl(this.CONTROLLER_NAME, 'something');
    // return this._http.post<ILoginResponse>(url, loginRequest).pipe(
    //   tap(() => this.isLoaderActive = false)
    // );
  }

  // add control center
  addControlCenter(loginForm):
    void // Observable<ILoginResponse>
  {
    this.isLoaderActive = true;
    // const url = this._urlHelper.getUrl(this.CONTROLLER_NAME, 'something');
    // return this._http.post<ILoginResponse>(url, loginRequest).pipe(
    //   tap(() => this.isLoaderActive = false)
    // );
  }

  // edit control center
  editControlCenter(loginForm):
    void // Observable<ILoginResponse>
  {
    this.isLoaderActive = true;
    // const url = this._urlHelper.getUrl(this.CONTROLLER_NAME, 'something');
    // return this._http.post<ILoginResponse>(url, loginRequest).pipe(
    //   tap(() => this.isLoaderActive = false)
    // );
  }
  /* #endregion */
}
