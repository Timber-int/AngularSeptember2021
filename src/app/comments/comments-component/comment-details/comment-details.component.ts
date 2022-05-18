import {Component, OnInit} from '@angular/core';
import {ICommentDetails} from '../../comment-model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {

  commentDetails: ICommentDetails;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(() => {
      const commentData = history.state.data;
      this.commentDetails = commentData;
    });
  }

}
