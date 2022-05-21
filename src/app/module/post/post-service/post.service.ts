import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {IPost} from '../interfaces';
import {baseURL, urls} from '../../../config';

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
