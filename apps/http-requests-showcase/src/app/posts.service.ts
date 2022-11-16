import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { Post } from "./post.model";

@Injectable({ providedIn: 'root' })
export class PostsService {
  constructor(private http: HttpClient) {}

  createAndStorePost(title: string, content: string) {
    const postData: Post = { title, content };
    this.http
    .post<{ name: string }>(
      'https://ng-complete-guide-e8f36-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
      postData
    )
    .subscribe(responseData => {
      console.log(responseData);
    });
  }

  fetchPosts() {
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
      .subscribe(posts => {});
  }
}
