import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Data } from './data';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
private userUrl: string;
  constructor(private http: HttpClient) { 
    this.userUrl = "http://localhost:8080/users";
  }

  private parseData(res:Response){
    return res.json() || [];
  }
  public findAll(): Observable<any> {
    return this.http.get(this.userUrl);
  }

  public save(user: Data){
    return this.http.post<Data>(this.userUrl, user);
  }

  public update(user: Data){
    return this.http.put(this.userUrl, user);
  }

  public deleteUser(id:number){
    return this.http.delete<Data>(this.userUrl+`/${id}`);
  }


}
