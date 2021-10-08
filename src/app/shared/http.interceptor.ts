import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent, HttpHeaders, HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpInterceptorBonus implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

      const authReq = request.clone({
        headers: new HttpHeaders({
          Authorization: 'SUPER_MOT_DE_PASSE_TOP_SECRET'})
      });
      return next.handle(authReq);
  }
}
