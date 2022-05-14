import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {CommentService} from '../../services';
import {ICommentDetails} from '../../models';

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {

  commentDetails: ICommentDetails;

  constructor(private activatedRoute: ActivatedRoute, private commentService: CommentService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      this.commentService.getComment(Number(id)).subscribe(value => this.commentDetails = value as ICommentDetails);
    });
  }

}
