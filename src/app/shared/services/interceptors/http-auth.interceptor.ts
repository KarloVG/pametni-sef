import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpAuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem("token") ?? null;
    if (token) {
      const cloned = req.clone({
        headers: req.headers.set("Authorization", "Bearer " + JSON.parse(token))
      });
      return next.handle(cloned);
    }
    else {
      return next.handle(req);
    }
  }
}
