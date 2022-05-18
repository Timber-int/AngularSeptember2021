import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {IPhotoDetails} from '../../photo-model';
import {PhotoService} from '../../photo-service/photo.service';

@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.css']
})
export class PhotoDetailsComponent implements OnInit {

  photoDetails: IPhotoDetails;

  constructor(private photoService: PhotoService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      const state = this.router.getCurrentNavigation()?.extras?.state?.['data'] as IPhotoDetails;

      if (state) {
        this.photoDetails = state;
      } else {
        this.photoService.getPhoto(id).subscribe(value => this.photoDetails = value as IPhotoDetails);
      }
    });
  }

}
