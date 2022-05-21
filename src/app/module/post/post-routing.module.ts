import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PostsResolver} from './post-service/resolvers/posts.resolver';
import {PostsComponent} from './post-component/posts/posts.component';
import {PostResolver} from './post-service';
import {PostDetailsComponent} from './post-component/post-details/post-details.component';

const routes: Routes = [
  {
    path: '', resolve: {postsData: PostsResolver}, component: PostsComponent, children: [
      {path: ':id', resolve: {postData: PostResolver}, component: PostDetailsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule {
}
