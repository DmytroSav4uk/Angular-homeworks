import { Component, OnInit } from '@angular/core';
import {IComment} from "../../../../Interfaces/comment.interface";
import {UserService} from "../../../../Services/user.service";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
comments: IComment[];

  constructor(private userService: UserService) {

  }

  ngOnInit(): void {
    this.userService.getAllComments().subscribe(value => this.comments =value)
  }

}
