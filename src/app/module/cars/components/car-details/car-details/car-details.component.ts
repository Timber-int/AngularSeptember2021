import {Component, OnInit} from '@angular/core';
import {ICar} from '../../../../../interfaces';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {

  carDetails: ICar;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({carDetailsData}) => {
      const state = this.router.getCurrentNavigation()?.extras.state?.['data'];

      if (state) {
        this.carDetails = state;
      } else {
        this.carDetails = carDetailsData;
      }
    });
  }

}
