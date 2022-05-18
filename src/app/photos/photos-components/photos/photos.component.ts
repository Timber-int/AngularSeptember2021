import {Component, OnInit} from '@angular/core';

import {IPhoto} from '../../photo-model';
import {PhotoService} from '../../photo-service/photo.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  photos: IPhoto[];

  constructor(private photoService: PhotoService) {
  }

  ngOnInit(): void {
    this.photoService.getPhotos().subscribe(value => this.photos = value);
  }

}
