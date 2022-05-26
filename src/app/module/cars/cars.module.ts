import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CarsRoutingModule} from './cars-routing.module';
import {CarsComponent} from './components/cars/cars.component';
import {CarService, CarsResolver} from './car-service';
import {HttpModule} from '../../http.module';
import {ReactiveFormsModule} from '@angular/forms';
import { CarDetailsComponent } from './components/car-details/car-details/car-details.component';


@NgModule({
  declarations: [
    CarsComponent,
    CarDetailsComponent
  ],
  imports: [
    CommonModule,
    CarsRoutingModule,
    HttpModule,
    ReactiveFormsModule,
  ],
  providers: [
    CarService,
    CarsResolver,
  ]
})
export class CarsModule {
}
