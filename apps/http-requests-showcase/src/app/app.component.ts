import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from './post.model';
import { PostsService } from './posts.service';

@Component({
  selector: 'http-requests-showcase-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  loadedPosts: Post[] = [];
  isFetching = false;
  error = null;

  private errorSub: Subscription;

  constructor(private postsService: PostsService) {}

  ngOnInit() {
    this.errorSub = this.postsService.error.subscribe(errorMessage => this.error = errorMessage);
    this.fetchingPosts();
  }

  ngOnDestroy(): void {
      this.errorSub.unsubscribe();
  }

  onCreatePost(postData: Post) {
    this.postsService.createAndStorePost(postData.title, postData.content);
  }

  onFetchPosts() {
    this.fetchingPosts();
  }

  onClearPosts() {
    this.postsService.deletePosts()
      .subscribe(() => this.loadedPosts = []);
  }

  onHandleError() {
    this.error = null;
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
