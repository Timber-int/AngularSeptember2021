import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {ICommentDetails} from '../../interfaces';

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {

  commentDetails: ICommentDetails;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({commentData}) => {
      const state = this.router.getCurrentNavigation()?.extras.state?.['data'];

      if (state) {
        this.commentDetails = state;
      } else {
        this.commentDetails = commentData;
      }
    });
  }
}
