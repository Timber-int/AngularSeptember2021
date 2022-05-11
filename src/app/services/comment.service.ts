import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IComment} from '../models';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private url = 'https://jsonplaceholder.typicode.com/comments';

  constructor(private http: HttpClient) {
  }

  getComments() {
    return this.http.get<IComment[]>(this.url);
  }

  getComment(id: number) {
    return this.http.get<IComment>(this.url + '/' + id);
  }
}
