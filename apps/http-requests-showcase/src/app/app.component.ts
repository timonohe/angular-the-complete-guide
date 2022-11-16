import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Post } from './post.model';
import { PostsService } from './posts.service';

@Component({
  selector: 'http-requests-showcase-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  loadedPosts: Post[] = [];
  isFetching = false;
  error = null;

  constructor(private http: HttpClient, private postsService: PostsService) {}

  ngOnInit() {
    this.fetchingPosts();
  }

  onCreatePost(postData: Post) {
    this.postsService.createAndStorePost(postData.title, postData.content)
      .subscribe(() => this.fetchingPosts());
  }

  onFetchPosts() {
    this.fetchingPosts();
  }

  onClearPosts() {
    this.postsService.deletePosts()
      .subscribe(() => this.loadedPosts = []);
  }

  private fetchingPosts() {
    this.isFetching = true;
    this.postsService.fetchPosts()
      .subscribe({
        next: posts => {
          this.isFetching = false;
          this.loadedPosts = posts;
        },
        error: error => {
          this.isFetching = false;
          this.error = error.message
        }
      })
  }
}
