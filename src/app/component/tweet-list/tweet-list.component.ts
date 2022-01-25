import { Component, OnInit } from '@angular/core';
import { ITweet } from 'src/app/interface/itweet';
import { TweetService } from 'src/app/Services/tweet.service';
import { Observable, Subject  } from 'rxjs';

@Component({
  selector: 'app-tweet-list',
  templateUrl: './tweet-list.component.html',
  styleUrls: ['./tweet-list.component.css']
})
export class TweetListComponent implements OnInit {

  Tweets: ITweet[] = [];
  Word: string = "have";

  constructor(private tweetservice: TweetService) { }

  ngOnInit(): void {
    this.tweetservice.getTweets().subscribe((data: ITweet[]) => {
      next: this.Tweets = data;
    });
  }

  SearchWord(text: string) : boolean {
    return !text.includes(this.Word);
  }

  TopLikes(number: number, date: Date) : boolean {
    console.log(date);
    let newDate: Date = new Date(date.toString());
    return (number > 200000) && (newDate.getMonth() >= 5) ;
  }
}
