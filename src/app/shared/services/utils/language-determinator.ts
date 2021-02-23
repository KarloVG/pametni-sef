import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageDeterminator {

  /* #region  Variables */
  private currentLanguage = new BehaviorSubject('hr');
  currentActiveLanguage$ = this.currentLanguage.asObservable();
  /* #endregion */

  /* #region  Methods */
  changeActiveLanguage(lang: string) {
    this.currentLanguage.next(lang);
  }
  /* #endregion */
}
