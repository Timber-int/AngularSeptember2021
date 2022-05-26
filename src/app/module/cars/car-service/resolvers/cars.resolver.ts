import {Injectable} from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';

import {ICar} from '../../../../interfaces';
import {CarService} from '../car.service';

@Injectable({
  providedIn: 'root'
})
export class CarsResolver implements Resolve<ICar[]> {

  constructor(private carService: CarService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ICar[]> | Promise<ICar[]> | ICar[] {
    return this.carService.getAll();
  }
}
