import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
  {path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule)},
  {path: 'posts', loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule)},
  {path: 'comments', loadChildren: () => import('./comments/comments.module').then(m => m.CommentsModule)},
  {path: 'albums', loadChildren: () => import('./albums/albums.module').then(m => m.AlbumsModule)},
  {path: 'photos', loadChildren: () => import('./photos/photos.module').then(m => m.PhotosModule)},
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
