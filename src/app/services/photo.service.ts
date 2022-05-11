import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IPhoto} from '../models';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  private url = 'https://jsonplaceholder.typicode.com/photos';

  constructor(private http: HttpClient) {
  }

  getPhotos() {
    return this.http.get<IPhoto[]>(this.url);
  }

  getPhoto(id: number) {
    return this.http.get<IPhoto>(this.url + '/' + id);
  }
}
