import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-like-dislike-counter',
  templateUrl: './like-dislike-counter.component.html',
  styleUrls: ['./like-dislike-counter.component.css']
})
export class LikeDislikeCounterComponent {
      noOfLikes : number = undefined;
      noOfDislikes : number = undefined;
      
      @Input()
      clear : number = 0;

      handleClear(){
        this.noOfDislikes = 0;
        this.noOfLikes = 0;
      }
}
