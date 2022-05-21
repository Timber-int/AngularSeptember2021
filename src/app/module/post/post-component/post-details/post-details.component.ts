import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {IPostDetails} from '../../interfaces';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  postDetails: IPostDetails;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({postData}) => {
      const state = this.router.getCurrentNavigation()?.extras.state?.['data'];
      if (state) {
        this.postDetails = state;
      } else {
        this.postDetails = postData;
      }
    });
  }

}
