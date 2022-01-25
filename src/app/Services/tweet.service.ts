import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITweet } from '../interface/itweet';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TweetService {

  constructor(private http:HttpClient) { }

  getTweets(): Observable<ITweet[]> {
    return this.http.get<ITweet[]>('./assets/JSON/Tweets.json');
  }
}
