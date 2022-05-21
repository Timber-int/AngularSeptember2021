import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from './user-component/users/users.component';
import {UserDetailsComponent} from './user-component/user-details/user-details.component';
import {UserResolver, UsersResolver} from './user-service';

const routes: Routes = [
  {
    path: '', component: UsersComponent, resolve: {usersData: UsersResolver}, children: [
      {path: ':id', resolve: {userData: UserResolver}, component: UserDetailsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
