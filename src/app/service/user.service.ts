import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IUser} from '../interface';
import {baseURL, urls} from '../config';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {
  }

  getUsers(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(baseURL + urls.users);
  }

  getUser(id: number): Observable<IUser> {
    return this.httpClient.get<IUser>(baseURL + urls.users + '/' + id);
  }
}
