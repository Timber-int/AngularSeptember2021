import {Component, Input, OnInit} from '@angular/core';

import {IUser, IUserDetails} from '../../interfaces';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent{

  @Input()
  user: IUser;

  constructor() { }
}
