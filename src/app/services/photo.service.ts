import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {PhotoInterface} from '../models';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  private url = 'https://jsonplaceholder.typicode.com/photos';

  constructor(private http: HttpClient) {
  }

  getPhotos(): Observable<PhotoInterface[]> {
    return this.http.get<PhotoInterface[]>(this.url);
  }

  getPhoto(id: number): Observable<PhotoInterface> {
    return this.http.get<PhotoInterface>(this.url + '/' + id);
  }
}
