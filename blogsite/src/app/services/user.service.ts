import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class UserService {
private baseUrl = "http://localhost:8080/user"
  constructor(private http:HttpClient) { }

  findUser(username:string):Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/${username}`);
  }
  getUser():Observable<User> {
    return this.http.get<User>(`${this.baseUrl}`);
  }
  addUser(u:User){
    return this.http.post<string>(`${this.baseUrl}/register`, u);
  }
}
