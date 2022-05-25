import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ICar} from '../../../interfaces';
import {Observable} from 'rxjs';
import {baseURL, urls} from '../../../config';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private httpClient: HttpClient) {
  }

  create(car: ICar): Observable<ICar> {
    return this.httpClient.post<ICar>(baseURL + urls.cars, car);
  }

  getAll(): Observable<ICar[]> {
    return this.httpClient.get<ICar[]>(baseURL + urls.cars);
  }

  getById(id: string): Observable<ICar> {
    return this.httpClient.get<ICar>(baseURL + urls.cars + '/' + id);
  }

  deleteById(id: string): Observable<void> {
    return this.httpClient.delete<void>(baseURL + urls.cars + '/' + id);
  }

  updateById(id: string, carForUpdate: Partial<ICar>): Observable<ICar> {
    return this.httpClient.patch<ICar>(baseURL + urls.cars + '/' + id, carForUpdate);
  }

}
