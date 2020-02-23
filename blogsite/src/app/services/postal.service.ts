import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostModel as Post} from '../models/post-model';

@Injectable({
  providedIn: 'root'
})
export class PostalService {
private baseUrl = "http://localhost:8080";

  constructor(private http:HttpClient) { }

  

   getPosts(): Observable<Post[]>{
     return this.http.get<Post[]>(this.baseUrl+"/posts");
  }
  createPost(newPost:Post){
    return this.http.post<String>(this.baseUrl+"/create", newPost);
  }
  updatePost(updatedPost:Post){
    return this.http.put<String>(this.baseUrl+"/editpost", updatedPost);
  }
  


}
