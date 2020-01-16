import { Component, OnInit } from '@angular/core';
import { Data } from '../data';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DUMMYDATA } from '../constans';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  titles: string[] = ["Developer", "Data Analytics", "Sales"];
  users:Data[] = [];
  user:Data;
  id:number;
  constructor(private userService:UserService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.userService.findAll().subscribe(data =>
      this.users = data,
      error => console.log(error)
      );
    // this.users = DUMMYDATA;
    this.user = this.getUserById(this.id);
    
  }

  onSubmit(value){
    this.updateEmployee(value)
  }
  getUserById(id:number){
    this.users = this.users.filter(user => {
      return user.id == id;
    });
    return this.users[0];
  }

  updateEmployee(value){
    let found:Data = this.user;
    found = new Data(this.id, value.fullname, value.initials, value.title);
    console.log(found);
  }

}
