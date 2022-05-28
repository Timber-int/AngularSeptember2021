import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {IUser} from '../../interface';
import {UserService} from '../../service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: IUser[];

  @Output()
  userEmitter = new EventEmitter<IUser>();

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(value => this.users = value);
  }

  catchUserEmit(user: IUser): void {
    console.log(user);
    this.userEmitter.emit(user);
  }

}
