import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CarsComponent} from './components/cars/cars.component';
import {CarDetailsResolver, CarsResolver} from './car-service';
import {CarDetailsComponent} from './components/car-details/car-details/car-details.component';

const routes: Routes = [
  {
    path: '', resolve: {carsData: CarsResolver}, component: CarsComponent, children: [
      {path: ':id', resolve: {carDetailsData: CarDetailsResolver}, component: CarDetailsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarsRoutingModule {
}
