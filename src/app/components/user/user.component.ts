import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IUser} from '../../interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  user: IUser;

  @Output()
  userEmitter = new EventEmitter<IUser>();

  constructor() {
  }

  ngOnInit(): void {
  }

  emit(user: IUser): void {
    this.userEmitter.emit(user);
  }
}
