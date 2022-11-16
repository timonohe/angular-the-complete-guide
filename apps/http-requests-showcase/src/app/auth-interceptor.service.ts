import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      console.log('Request is on its way');
      console.log(req.url);
      const modifiedRequest = req.clone({headers: req.headers.append('Auth', 'xyz')});
      return next
        .handle(modifiedRequest)
        .pipe(tap(event => {
          console.log(event);
          if (event.type === HttpEventType.Response) {
            console.log('Response arrived, body data:', event.body);
          }
        }));
  }
}
