import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LikeDislikeCounterComponent } from './like-dislike-counter/like-dislike-counter.component';
import { LikeDislikeButtonComponent } from './like-dislike-button/like-dislike-button.component';

@NgModule({
  declarations: [
    AppComponent,
    LikeDislikeCounterComponent,
    LikeDislikeButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
