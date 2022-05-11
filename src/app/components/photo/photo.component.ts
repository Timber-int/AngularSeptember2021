import {Component, Input, OnInit} from '@angular/core';

import {PhotoInterface} from '../../models';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  @Input()
  photo: PhotoInterface;

  constructor() {
  }

  ngOnInit(): void {
  }

}
