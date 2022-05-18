import {Component, OnInit} from '@angular/core';

import {AlbumService} from '../../album-service/album.service';
import {IAlbum} from '../../album-model';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {


  albums: IAlbum[];

  constructor(private albumService: AlbumService) {
  }

  ngOnInit(): void {
    this.albumService.getAlbums().subscribe(value => this.albums = value);
  }

}
