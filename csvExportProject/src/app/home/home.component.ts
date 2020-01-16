import { Component, OnInit } from '@angular/core';
import { DUMMYDATA } from '../constans';
import { Data } from '../data';
import { UserService } from '../user.service';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  displayColumns: string[] = [
    'fullname',
    'initials',
    'title',
    'Actions'
  ];
  users:Data[] = [];
  

  constructor(private us: UserService, private router:Router) { }

  ngOnInit() {
    this.us.findAll().subscribe(
      data => this.users = data,
      error => console.log(error)
    );
    //console.table(this.users);
     //this.users = DUMMYDATA;

  }

  updateUser(id:number){
    this.router.navigate(['update', id]);
  }

  deleteUser(id:number) {
    this.users = this.users.filter((user) => {
      return user.id != id;
    });
    this.us.deleteUser(id).subscribe(res => {
      console.log(JSON.stringify(res));
    },
    error => console.log(error));
    console.table(this.users);
  }
}
