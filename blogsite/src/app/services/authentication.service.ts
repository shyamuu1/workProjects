import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from '../models/user';
import { NgForm } from '@angular/forms';
import { map } from 'rxjs/operators';

const apiUrl = "http://localhost:8080/user";
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User> = null;
  public isLoggedIn = false;
  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(sessionStorage.getItem('currentUser'))
    );

    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currrentUserValue(): User {
    return this.currentUserSubject.value;
  }


  login(u:User): Observable<User> {
    return this.http.post<User>(
      `${apiUrl}/login`,u)
      .pipe(map(user => {
        sessionStorage.setItem('currentUser', JSON.stringify(user))
        this.isLoggedIn = true;
        this.currentUserSubject.next(user);
        return user;
      }));
  }
}
