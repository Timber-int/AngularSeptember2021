import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: 'login', loadChildren: () => import('./module/login/login.module').then(m => m.LoginModule)},
  {path: 'register', loadChildren: () => import('./module/register/register.module').then(m => m.RegisterModule)},
  {path: 'cars', loadChildren: () => import('./module/cars/cars.module').then(m => m.CarsModule)}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule {

}
