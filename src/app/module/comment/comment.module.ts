import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentRoutingModule } from './comment-routing.module';
import { CommentsComponent } from './comment-component/comments/comments.component';
import { CommentComponent } from './comment-component/comment/comment.component';
import { CommentDetailsComponent } from './comment-component/comment-details/comment-details.component';
import {HttpClientModule} from '@angular/common/http';
import {CommentResolver, CommentService, CommentsResolver} from './comment-service';


@NgModule({
  declarations: [
    CommentsComponent,
    CommentComponent,
    CommentDetailsComponent,
  ],
  imports: [
    CommonModule,
    CommentRoutingModule,
    HttpClientModule,
  ],
  providers:[
    CommentService,
    CommentResolver,
    CommentsResolver,
  ]
})
export class CommentModule { }
