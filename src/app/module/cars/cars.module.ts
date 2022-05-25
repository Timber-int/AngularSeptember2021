import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CarsRoutingModule} from './cars-routing.module';
import {CarsComponent} from './components/cars/cars.component';
import {CarService} from './car-service';
import {HttpClientModule} from '@angular/common/http';
import {CarsResolver} from './car-service';


@NgModule({
  declarations: [
    CarsComponent
  ],
  imports: [
    CommonModule,
    CarsRoutingModule,
    HttpClientModule,
  ],
  providers: [
    CarService,
    CarsResolver,
  ]
})
export class CarsModule {
}
