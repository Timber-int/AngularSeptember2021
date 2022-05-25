import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoginService} from './module/login/login-service';

@Injectable()
export class MainInterceptor implements HttpInterceptor {

  constructor(private loginService: LoginService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const isAuthenticated = this.loginService.isAuthorization();

    const tokenFromLocalStorage = this.loginService.getToken();
    console.log(tokenFromLocalStorage);
    console.log(isAuthenticated);
    if (isAuthenticated) {
      request = this.addToken(request, tokenFromLocalStorage);
    }

    return next.handle(request);
  }

  addToken(request: HttpRequest<any>, token: string): HttpRequest<any> {
    return request.clone({
      setHeaders: {Authorization: `Bearer ${token}`}
    });
  }
}
