import {Component, OnInit} from '@angular/core';
import {IAlbumDetails} from '../../album-model';
import {ActivatedRoute, Router} from '@angular/router';

import {AlbumService} from '../../album-service/album.service';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit {

  albumDetails: IAlbumDetails;

  constructor(private albumService: AlbumService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      const state = this.albumDetails = this.router.getCurrentNavigation()?.extras?.state?.['data'] as IAlbumDetails;

      if (state) {
        this.albumDetails = state;
      } else {
        this.albumService.getAlbum(id).subscribe(value => this.albumDetails = value as IAlbumDetails);
      }
    });
  }

}
