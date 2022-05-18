import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {IAlbum} from '../album-model';
import {baseURL, urls} from '../../config';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private httpClient: HttpClient) {
  }

  getAlbums(): Observable<IAlbum[]> {
    return this.httpClient.get<IAlbum[]>(baseURL + urls.albums);
  }

  getAlbum(id: number): Observable<IAlbum> {
    return this.httpClient.get<IAlbum>(baseURL + urls.albums + '/' + id);
  }
}
