import { Component, OnInit } from '@angular/core';
import { DUMMYDATA } from '../constans';
import { Data } from '../data';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  displayColumns: string[]=[
    'fullname',
    'initials',
    'title'
  ];
  users: Data[];

  constructor(private us:UserService) { }

  ngOnInit() {
    this.us.findAll().subscribe(data => {
      this.users = data;
    });
  
  }

}
