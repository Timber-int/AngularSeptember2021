import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: 'users', loadChildren: () => import('./module/user/user.module').then(m => m.UserModule)},
  {path: 'posts', loadChildren: () => import('./module/post/post.module').then(m => m.PostModule)},
  {path: 'comments', loadChildren: () => import('./module/comment/comment.module').then(m => m.CommentModule)},
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
