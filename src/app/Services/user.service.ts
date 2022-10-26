import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IUser} from "../Interfaces/user.interface";
import {urls} from "../Configs/urls";
import {IComment} from "../Interfaces/comment.interface";
import {IPost} from "../Interfaces/post.interface";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(urls.users)
  }

  getAllPosts(): Observable<IPost[]> {
    return this.httpClient.get<IPost[]>(urls.posts)
  }

  getAllComments(): Observable<IComment[]> {
    return this.httpClient.get<IComment[]>(urls.comments)
  }

}
