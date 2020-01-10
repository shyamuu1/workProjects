import { Component, OnInit } from '@angular/core';
import { DUMMYDATA } from '../constans';
import { Data } from '../data';

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
  users: Data[] = DUMMYDATA;

  constructor() { }

  ngOnInit() {
    this.users;
  }

}
