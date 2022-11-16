import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Post } from './post.model';

@Component({
  selector: 'http-requests-showcase-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  loadedPosts: Post[] = [];
  isFetching = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchPosts();
  }

  onCreatePost(postData: Post) {
    // Send Http request
    this.http
    .post<{ name: string }>(
      'https://ng-complete-guide-e8f36-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
      postData
    )
    .subscribe(responseData => {
      console.log(responseData);
    });
  }

  onFetchPosts() {
    // Send Http request
    this.fetchPosts();
  }

  onClearPosts() {
    // Send Http request
  }

  private fetchPosts() {
    this.isFetching = true;

    this.http
      .get<{ [key: string]: Post }>('https://ng-complete-guide-e8f36-default-rtdb.europe-west1.firebasedatabase.app/posts.json')
      .pipe(
        map(responseData => {
          const postsArray: Post[] = [];
          for(const key in responseData) {
            postsArray.push({...responseData[key], id: key})
          }
          return postsArray;
        })
      )
      .subscribe(posts => {
        this.isFetching = false;
        this.loadedPosts = posts;
      });
  }
}
