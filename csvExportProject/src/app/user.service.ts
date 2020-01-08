import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Data } from './data';

@Injectable({
  providedIn: 'root'
})
export class UserService {
private userUrl: string;
  constructor(private http: HttpClient) { 
    this.userUrl = "http://localhost:8080/users";
  }

  public findAll(): Observable<Data[]> {
    return this.http.get<Data[]>(this.userUrl);
  }


}
