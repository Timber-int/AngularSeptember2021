import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CarsComponent} from './components/cars/cars.component';
import {CarsResolver} from './car-service';

const routes: Routes = [
  {path: '', resolve: {carsData: CarsResolver}, component: CarsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarsRoutingModule {
}
