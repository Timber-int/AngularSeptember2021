import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AlbumsComponent} from './albums-components/albums/albums.component';
import {AlbumDetailsComponent} from './albums-components/album-details/album-details.component';

const routes: Routes = [
  {
    path: '', component: AlbumsComponent, children: [
      {path: ':id', component: AlbumDetailsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlbumsRoutingModule {
}
