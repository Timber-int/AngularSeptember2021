import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CommentResolver, CommentsResolver} from './comment-service';
import {CommentsComponent} from './comment-component/comments/comments.component';
import {CommentDetailsComponent} from './comment-component/comment-details/comment-details.component';

const routes: Routes = [
  {
    path: '', resolve: {commentsData: CommentsResolver}, component: CommentsComponent, children: [
      {path: ':id', resolve: {commentData: CommentResolver}, component: CommentDetailsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentRoutingModule {
}
