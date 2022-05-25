import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {LoginService} from './login-service';
import {Router} from '@angular/router';

@Injectable()
export class MainInterceptor implements HttpInterceptor {

  constructor(private loginService: LoginService, private router: Router) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const isAuthenticated = this.loginService.isAuthorization();

    const tokenFromLocalStorage = this.loginService.getToken();
    console.log(tokenFromLocalStorage);
    console.log(isAuthenticated);
    if (isAuthenticated) {
      request = this.addToken(request, tokenFromLocalStorage);
    }
    console.log(request);
    return next.handle(request).pipe(
      // @ts-ignore
      catchError((res: HttpErrorResponse) => {
        if (res && res.error && res.status === 401) {
          this.loginService.deleteToken();
          this.router.navigate(['login']);
        }
      })
    );
  }

  addToken(request: HttpRequest<any>, token: string): HttpRequest<any> {
    return request.clone({
      setHeaders: {Authorization: `Bearer ${token}`}
    });
  }
}
