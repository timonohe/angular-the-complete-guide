import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, Observable, Subject, throwError } from "rxjs";
import { Post } from "./post.model";

@Injectable({ providedIn: 'root' })
export class PostsService {
  error = new Subject<string>();

  constructor(private http: HttpClient) {}

  createAndStorePost(title: string, content: string) {
    const postData: Post = { title, content };
    return this.http
    .post<{ name: string }>(
      'https://ng-complete-guide-e8f36-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
      postData
    ).subscribe({
      next: post => console.log(post),
      error: error => this.error.next(error.message)
    });
  }

  fetchPosts(): Observable<Post[]> {
    return this.http
      .get<{ [key: string]: Post }>(
        'https://ng-complete-guide-e8f36-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
        {
          headers: new HttpHeaders({'Custom-Header': 'Hello'})
        }
      )
      .pipe(
        map(responseData => {
          const postsArray: Post[] = [];
          for(const key in responseData) {
            postsArray.push({...responseData[key], id: key})
          }
          return postsArray;
        }),
        catchError(errorRes => {
          // Send to analytics server
          return throwError(() => new Error(errorRes.message));
        })
      );
  }

  deletePosts() {
    return this.http
      .delete('https://ng-complete-guide-e8f36-default-rtdb.europe-west1.firebasedatabase.app/posts.json');
  }
}
