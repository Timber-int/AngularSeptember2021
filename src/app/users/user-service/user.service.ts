import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {IUser} from '../user-model';
import {baseURL, urls} from '../../config';
import {IUserDetails} from '../user-model/user-details.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {
  }

  getUsers(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(baseURL + urls.users);
  }

  getUser(id: number): Observable<IUserDetails> {
    return this.httpClient.get<IUserDetails>(baseURL + urls.users + '/' + id);
  }
}
