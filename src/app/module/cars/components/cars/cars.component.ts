import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ICar} from '../../../../interfaces';
import {CarService} from '../../car-service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {RegEx} from '../../../../constants';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars: ICar[];

  createdCar: ICar;

  form: FormGroup;

  @Input()
  carForUpdate: ICar | null;

  constructor(private activatedRoute: ActivatedRoute, private carService: CarService) {
    this._createForm();
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({carsData}) => this.cars = carsData);
  }

  _createForm(): void {
    this.form = new FormGroup({
      model: new FormControl(null, [Validators.required, Validators.pattern(RegEx.model)]),
      price: new FormControl(0, [Validators.required, Validators.min(0), Validators.max(1000000)]),
      year: new FormControl(1990, [Validators.required, Validators.min(1990), Validators.max(new Date().getFullYear())]),
    });
  }

  createCar(): void {
    if (!this.carForUpdate) {
      const car = this.form.getRawValue();
      this.carService.create(car).subscribe(value => {
        this.cars.push(value);
        this.form.reset();
      });
    } else {
      this.carService.updateById(Number(this.carForUpdate.id), this.form.value).subscribe((carUpdated: ICar) => {
          this.cars = this.cars.map(car => car.id === carUpdated.id ? {...carUpdated} : car);
          this.carForUpdate = null;
          this.form.reset();
        }
      );
    }
  }

  deleteCar(id: number | undefined): void {
    if (id) {
      this.carService.deleteById(id).subscribe(() => {
        this.cars = this.cars.filter(car => car.id !== id);
      });
    }
  }

  getCarBodyToUpdate(car: ICar): void {
    this.carForUpdate = car;
    this.form.setValue({model: car.model, price: car.price, year: car.year});
  }
}
