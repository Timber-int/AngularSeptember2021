import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {baseURL, urls} from '../config';
import {Observable} from 'rxjs';
import { IComment } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient: HttpClient) {
  }


  getComments(): Observable<IComment[]>{
    return this.httpClient.get<IComment[]>(baseURL + urls.comments);
  }

  getComment(id: number): Observable<IComment>{
    return this.httpClient.get<IComment>(baseURL + urls.comments + '/' + id);
  }

}
