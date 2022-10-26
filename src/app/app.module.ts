import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersComponent } from './Components/users/users/users.component';
import { UserComponent } from './Components/users/user/user/user.component';
import * as https from "https";
import {HttpClientModule} from "@angular/common/http";
import { CommentComponent } from './Components/comments/comment/comment/comment.component';
import { CommentsComponent } from './Components/comments/comments/comments/comments.component';
import { PostComponent } from './Components/posts/post/post/post.component';
import { PostsComponent } from './Components/posts/posts/posts/posts.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    CommentComponent,
    CommentsComponent,
    PostComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
