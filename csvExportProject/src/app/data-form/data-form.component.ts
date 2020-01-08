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
  dataArray: Data[] = [];
  usersArray: Data[] = [];
  titles = ["Developer", "Data Analytics", "Sales"];
  model: Data;
  submitted = false;
  objectMap = new Map();

  constructor(private es: ExportService, private us: UserService) { }

  ngOnInit() {
    //this.fillDataArray();
    this.us.findAll().subscribe(data => {
      this.dataArray = data;
    });
    //this.model = this.dataArray[0];
  }
  onSubmit(value) {
    this.submitted = true;
    // add it to the list
    this.addData(value);
    // convert to csv
    // dowload csv to browser

  }
  // getObjectMap() {
  //   let OMap = this.objectMap;
  //   OMap= this.es.convertObjectToMap();
  //   console.table([OMap]);
  //   return OMap;
  // }
  fillDataArray() {
    this.dataArray = this.es.getData();
    console.table(this.dataArray);
    return this.dataArray;

  }
  addData(value) {
    let id: number = this.dataArray.length +1;
    let valid: boolean = false;
    let newData: Data = new Data(id, value.fullname, value.initials.toUpperCase(), value.title);
    this.dataArray.forEach(user => {
      if (newData.id == user.id || newData.initials == user.initials) {
        valid = true;
      }
    });
    if (!valid) {
      this.dataArray.push(newData);
    }
    this.es.downloadBlob(this.dataArray);

  }

}
