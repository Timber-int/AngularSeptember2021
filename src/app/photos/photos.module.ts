import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PhotosRoutingModule} from './photos-routing.module';
import {PhotosComponent} from './photos-components/photos/photos.component';
import {PhotoComponent} from './photos-components/photo/photo.component';
import {PhotoDetailsComponent} from './photos-components/photo-details/photo-details.component';
import {PhotoService} from './photo-service/photo.service';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    PhotosComponent,
    PhotoComponent,
    PhotoDetailsComponent
  ],
  imports: [
    CommonModule,
    PhotosRoutingModule,
    HttpClientModule,
  ],
  providers: [
    PhotoService,
  ]
})
export class PhotosModule {
}
