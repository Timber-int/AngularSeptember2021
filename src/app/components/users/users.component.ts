import {Component, OnInit} from '@angular/core';

import {UserService} from '../../services';
import {UserInterface} from '../../models';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: UserInterface[];

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getUsers().subscribe(value => this.users = value);
  }

}
