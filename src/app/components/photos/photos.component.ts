import {Component, OnInit} from '@angular/core';

import {PhotoService} from '../../services';
import {PhotoInterface} from '../../models';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  photos: PhotoInterface[];

  constructor(private photoService: PhotoService) {
  }

  ngOnInit(): void {
    this.photoService.getPhotos().subscribe(value => this.photos = value);
  }

}
