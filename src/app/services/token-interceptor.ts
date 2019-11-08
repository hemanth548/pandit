import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class TokenInterceptor implements HttpInterceptor {

  constructor(public auth: AuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    request = request.clone({
      setHeaders: {
        Authorization: `${this.auth.getToken()}`
      }
    })
    return next.handle(request);
  }
}
  
// import { LoadingBarService } from '@ngx-loading-bar/core';
// import { Injectable } from '@angular/core';
// import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpEventType } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { finalize } from 'rxjs/operators';
// import { AuthService } from './auth.service';

// @Injectable()
// export class TokenInterceptor implements HttpInterceptor {
//   constructor(private loadingBar: LoadingBarService, public auth: AuthService) {}

//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     // https://github.com/angular/angular/issues/18155
//     if (req.headers.has('ignoreLoadingBar')) {
//       return next.handle(req.clone({ headers: req.headers.delete('ignoreLoadingBar') }));
//     }
//     req = req.clone({
//              setHeaders: {
//               Authorization: `${this.auth.getToken()}`
//             }
//            })

//     const r = next.handle(req);

//     let started = false;
//     const responseSubscribe = r.subscribe.bind(r);
//     r.subscribe = () => {
//       this.loadingBar.start();
//       started = true;
//       return responseSubscribe();
//     };

//     return r.pipe(
//       finalize(() => started && this.loadingBar.complete()),
//     );
//   }
// }