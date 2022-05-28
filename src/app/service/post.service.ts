import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {IPost, IUser} from '../interface';
import {baseURL, urls} from '../config';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  storage = new BehaviorSubject<IPost>({id: 0, title: '', body: ''});

  constructor(private httpClient:HttpClient) {
  }

  getPosts(): Observable<IPost[]> {
    return this.httpClient.get<IPost[]>(baseURL + urls.posts);
  }
}
