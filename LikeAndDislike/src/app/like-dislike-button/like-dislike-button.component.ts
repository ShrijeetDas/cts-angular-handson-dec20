import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EVENT_MANAGER_PLUGINS } from '@angular/platform-browser';

@Component({
  selector: 'app-like-dislike-button',
  templateUrl: './like-dislike-button.component.html',
  styleUrls: ['./like-dislike-button.component.css']
})
export class LikeDislikeButtonComponent {

      @Input()
      likes : number = undefined;
      
      @Input()
      dislikes : number = undefined;
  
      noOfLikes : number = 1;
      noOfDislikes : number = 1;

      @Output()
      likeCounter : EventEmitter<number> = new EventEmitter<number>();

      @Output()
      dislikeCounter : EventEmitter<number> = new EventEmitter<number>();

      handleLikes(){
        if(this.likes == 0){
            this.noOfLikes = 1;
            this.likes = undefined;
        }
        this.likeCounter.emit(this.noOfLikes++);
      }
      
      handleDislikes(){
        if(this.dislikes == 0){
          this.noOfDislikes = 1;
          this.dislikes = undefined;
        }
        this.dislikeCounter.emit(this.noOfDislikes++);
      }

      handleClear(){
        this.noOfLikes = 0;
        this.noOfDislikes = 0;
      }
     
}
