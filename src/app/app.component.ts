import {Component} from '@angular/core';
import {IPost, IUser} from './interface';
import {PostService} from './service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user: IUser;
  post: IPost

  constructor(private  postService: PostService) {
  postService.storage.subscribe(value => this.post =value)
  }

  catchUserEmit(user: IUser): void {
    this.user = user;
  }
}
