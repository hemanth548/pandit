import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { NgxSpinnerService } from "ngx-spinner";


@Injectable({
  providedIn: 'root'
})

export class TokenInterceptor implements HttpInterceptor {

  constructor(public auth: AuthService, private spinnerService: NgxSpinnerService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.spinnerService.show();
    request = request.clone({

      setHeaders: {
        Authorization: `${this.auth.getToken()}`
      }
    })
    return next.handle(request);
  }
}
