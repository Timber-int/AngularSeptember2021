import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IPhoto} from '../photo-model';
import {baseURL, urls} from '../../config';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private httpClient: HttpClient) {
  }

  getPhotos(): Observable<IPhoto[]> {
    return this.httpClient.get<IPhoto[]>(baseURL + urls.photos);
  }

  getPhoto(id: number): Observable<IPhoto> {
    return this.httpClient.get<IPhoto>(baseURL + urls.photos + '/' + id);
  }
}
