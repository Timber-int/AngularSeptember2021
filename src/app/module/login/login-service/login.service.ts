import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {IToken, IUser} from '../../../interfaces';
import {Observable, tap} from 'rxjs';
import {baseURL, urls} from '../../../config';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private accessTokenKey = 'access';
  private refreshTokenKey = 'refresh';

  constructor(private httpClient: HttpClient) {
  }

  login(user: IUser): Observable<IToken> {
    return this.httpClient.post<IToken>(baseURL + urls.auth, user);
  }

  getAccessToken(): string {
    return localStorage.getItem(this.accessTokenKey) as string;
  }

  getRefreshToken(): string {
    return localStorage.getItem(this.refreshTokenKey) as string;
  }

  refresh(): Observable<IToken> {
    const refresh = this.getRefreshToken();
    return this.httpClient.post<IToken>(baseURL + urls.auth + '/refresh', {refresh}).pipe(
      tap((tokens: IToken) => {
        this.setToken(tokens);
      })
    );
  }

  setToken(token: IToken): void {
    localStorage.setItem(this.accessTokenKey, token.access);
    localStorage.setItem(this.refreshTokenKey, token.refresh);
  }

  isAuthorization(): boolean {
    return !!localStorage.getItem(this.accessTokenKey);
  }

  deleteToken(): void {
    localStorage.removeItem(this.accessTokenKey);
    localStorage.removeItem(this.refreshTokenKey);
  }
}
