import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IToken, IUser} from '../../../interfaces';
import {Observable} from 'rxjs';
import {baseURL, urls} from '../../../config';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private accessTokenKey = 'access';

  constructor(private httpClient: HttpClient) {
  }

  login(user: IUser): Observable<IToken> {
    return this.httpClient.post<IToken>(baseURL + urls.auth, user);
  }

  getToken(): string {
    return localStorage.getItem(this.accessTokenKey) as string;
  }

  setToken(token: IToken): void {
    localStorage.setItem(this.accessTokenKey, token.access);
  }

  isAuthorization(): boolean {
    return !!localStorage.getItem(this.accessTokenKey);
  }
}
