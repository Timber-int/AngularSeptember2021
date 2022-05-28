import {Component, Input, OnInit} from '@angular/core';
import {IPost} from '../../interface';
import {PostService} from '../../service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input()
  post: IPost;

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
  }

  saveToStorage(): void {
    this.postService.storage.next(this.post);
  }
}
