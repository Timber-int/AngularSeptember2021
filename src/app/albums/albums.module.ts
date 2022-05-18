import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AlbumsRoutingModule} from './albums-routing.module';
import {AlbumsComponent} from './albums-components/albums/albums.component';
import {AlbumComponent} from './albums-components/album/album.component';
import {AlbumDetailsComponent} from './albums-components/album-details/album-details.component';
import {AlbumService} from './album-service/album.service';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AlbumsComponent,
    AlbumComponent,
    AlbumDetailsComponent
  ],
  imports: [
    CommonModule,
    AlbumsRoutingModule,
    HttpClientModule
  ],
  providers: [
    AlbumService,
  ]
})
export class AlbumsModule {
}
