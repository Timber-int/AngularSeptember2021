import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {baseURL, urls} from '../config';
import { IPost } from '../models';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) {
  }

  getPosts(): Observable<IPost[]> {
    return this.httpClient.get<IPost[]>(baseURL + urls.posts);
  }

  getPost(id: number): Observable<IPost> {
    return this.httpClient.get<IPost>(baseURL + urls.posts + '/' + id);
  }
}
