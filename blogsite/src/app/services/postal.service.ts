import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostModel as Post} from '../models/post-model';

@Injectable({
  providedIn: 'root'
})
export class PostalService {
private baseUrl = "http://localhost:8080/post";

  constructor(private http:HttpClient) { }

  getSinglePostById(authorId:Number): Observable<Post>{
    return this.http.get<Post>(this.baseUrl+"/"+`${authorId}`);
  }
  getPosts(): Observable<Post[]>{
     return this.http.get<Post[]>(this.baseUrl+"/allPosts");
  }
  createPost(newPost:Post){
    return this.http.post<String>(this.baseUrl+"/create", newPost);
  }
  updatePost(authorId:Number, updatedPost:Post){
    return this.http.put<String>(`${this.baseUrl}/edit/${authorId}`, updatedPost);
  }
  deletePost(authorId:Number){
    return this.http.delete<String>(`${this.baseUrl}/${authorId}`);
  }
  


}
