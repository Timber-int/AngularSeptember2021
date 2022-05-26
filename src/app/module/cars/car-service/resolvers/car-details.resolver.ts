import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';

import {ICar} from '../../../../interfaces';
import {CarService} from '../car.service';

@Injectable({
  providedIn: 'root'
})
export class CarDetailsResolver implements Resolve<ICar> {

  constructor(private carService: CarService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ICar> | Promise<ICar> | ICar {
    const id = route.params['id'];
    return this.carService.getById(id);
  }
}
