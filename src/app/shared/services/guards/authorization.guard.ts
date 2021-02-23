import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { LocalStorageService } from "../authorization/local-storage.service";

@Injectable()
export class AuthorizationGuard implements CanActivate {

  constructor(
    private readonly _localStorageService: LocalStorageService,
    private readonly _router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree {
    if (this._localStorageService.get('is_authenticated')) {
      if (state.url === '/prijava') {
        // trebalo bi ići na naslovnu tu
        return false;
      } else {
        return true;
      }
    } else {
      if (state.url.indexOf('/prijava') > -1) {
        return true;
      } else {
        return this._router.parseUrl('/prijava');
      }
    }
  }
}
