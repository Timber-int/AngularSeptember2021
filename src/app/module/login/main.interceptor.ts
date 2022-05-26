import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {Observable, switchMap, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {LoginService} from './login-service';
import {Router} from '@angular/router';

import {IToken} from '../../interfaces';

@Injectable()
export class MainInterceptor implements HttpInterceptor {
  private isRefreshing = false;

  constructor(private loginService: LoginService, private router: Router) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const isAuthenticated = this.loginService.isAuthorization();

    const tokenFromLocalStorage = this.loginService.getAccessToken();

    if (isAuthenticated) {
      request = this.addToken(request, tokenFromLocalStorage);
    }

    return next.handle(request).pipe(
      catchError((res: HttpErrorResponse) => {
        if (res && res.error && res.status === 401) {
          return this.handle401Error(request, next);

        }
        return throwError(() => new Error('token invalid or expired'));
      })
    ) as any;
  }

  addToken(request: HttpRequest<any>, token: string): HttpRequest<any> {
    return request.clone({
      setHeaders: {Authorization: `Bearer ${token}`}
    });
  }

  handle401Error(request: HttpRequest<any>, next: HttpHandler): any {
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      return this.loginService.refresh().pipe(
        switchMap((tokens: IToken) => {
          return next.handle(this.addToken(request, tokens.access));
        }),
        catchError(() => {
          this.isRefreshing = false;
          this.loginService.deleteToken();
          this.router.navigate(['login']);
          return throwError(() => new Error('token invalid or expired'));
        })
      );
    }
  }
}
