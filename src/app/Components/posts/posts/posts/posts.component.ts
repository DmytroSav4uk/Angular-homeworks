import { Component, OnInit } from '@angular/core';
import {IPost} from "../../../../Interfaces/post.interface";
import {UserService} from "../../../../Services/user.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts:IPost[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {

    this.userService.getAllPosts().subscribe(value => this.posts = value)
  }

}
