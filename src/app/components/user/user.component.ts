import {Component, Input, OnInit} from '@angular/core';

import {UserInterface} from '../../models';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  user: UserInterface;

  ngOnInit(): void {
  }

}
