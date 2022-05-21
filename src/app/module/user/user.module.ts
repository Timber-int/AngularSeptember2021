import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {UserRoutingModule} from './user-routing.module';
import {UsersComponent} from './user-component/users/users.component';
import {UserComponent} from './user-component/user/user.component';
import {UserDetailsComponent} from './user-component/user-details/user-details.component';
import {UserResolver, UserService, UsersResolver} from './user-service';


@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule,
  ],
  providers: [
    UserService,
    UserResolver,
    UsersResolver,
  ]
})
export class UserModule {
}
