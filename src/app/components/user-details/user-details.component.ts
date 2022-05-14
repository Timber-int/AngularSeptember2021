import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {IUserDetails} from '../../models';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userDetails: IUserDetails;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(value => {
      const userData = history.state.data;
      this.userDetails = userData;
    });
  }

}
