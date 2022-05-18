import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CommentsRoutingModule} from './comments-routing.module';
import {CommentsComponent} from './comments-component/comments/comments.component';
import {CommentComponent} from './comments-component/comment/comment.component';
import {CommentDetailsComponent} from './comments-component/comment-details/comment-details.component';
import {CommentService} from './comment-service/comment.service';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    CommentsComponent,
    CommentComponent,
    CommentDetailsComponent
  ],
  imports: [
    CommonModule,
    CommentsRoutingModule,
    HttpClientModule
  ],
  providers: [
    CommentService
  ]
})
export class CommentsModule {
}
