import { Component, OnInit } from '@angular/core';
import { Data } from '../data';
import { ExportService } from '../export.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {
  users:Data[] = [];
  titles = ["Developer", "Data Analytics", "Sales"];
  model: Data;
  submitted = false;
  objectMap = new Map();

  constructor(private es: ExportService, private us: UserService) { }

  ngOnInit() {
    this.us.findAll().subscribe(data => {
      this.users = data;
    });
    //this.model = this.dataArray[0];
  }
  
  onSubmit(value) {
    this.submitted = true;
    this.addData(value);
  }

  addData(value) {
    let id: number = this.users.length +1;
    let valid: boolean = false;
    let newData: Data = new Data(id, value.fullname, value.initials.toUpperCase(), value.title);
    this.users.forEach(user => {
      if (newData.initials == user.initials) {
        valid = true;
      }
    });
    if (!valid) {
      this.users.push(newData);
    }
    this.es.downloadBlob(this.users);

  }

}
