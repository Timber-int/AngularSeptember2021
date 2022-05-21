import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {PostRoutingModule} from './post-routing.module';
import {PostsComponent} from './post-component/posts/posts.component';
import {PostComponent} from './post-component/post/post.component';
import {PostDetailsComponent} from './post-component/post-details/post-details.component';
import {PostResolver, PostService} from './post-service';
import {PostsResolver} from './post-service/resolvers/posts.resolver';

@NgModule({
  declarations: [
    PostsComponent,
    PostComponent,
    PostDetailsComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    HttpClientModule,
  ],
  providers: [PostService, PostResolver, PostsResolver]
})
export class PostModule {
}
