import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {IUserDetails} from '../../user-model/user-details.interface';
import {UserService} from '../../user-service/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userDetails: IUserDetails;

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      this.userService.getUser(Number(id)).subscribe(value => this.userDetails = value);
    });
  }

}
