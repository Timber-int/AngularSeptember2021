import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {IUserDetails} from '../../interfaces';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userDetails: IUserDetails;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({userData}) => {
      const state = this.router.getCurrentNavigation()?.extras.state?.['data'] as IUserDetails;

      if (state) {
        this.userDetails = state;
      } else {
        this.userDetails = userData;
      }
    });
  }

}
