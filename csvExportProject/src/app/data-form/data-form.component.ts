import { Component, OnInit } from '@angular/core';
import { Data } from '../data';
import { ExportService } from '../export.service';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {
  dataArray: Data[] = [];
  titles = ["Developer", "Data Analytics", "Sales"];
  model: Data;
  submitted = false;
  objectMap = new Map();

  constructor(private es: ExportService) { }

  ngOnInit() {
    this.fillDataArray();
    this.model = this.dataArray[0];
  }
  onSubmit(value) {
    this.submitted = true;
    // add it to the list
    //this.addData(value);
    // convert to csv
    // dowload csv to browser
    this.es.downloadBlob(this.dataArray);
  }
  // getObjectMap() {
  //   let OMap = this.objectMap;
  //   OMap= this.es.convertObjectToMap();
  //   console.table([OMap]);
  //   return OMap;
  // }
  fillDataArray() {
    this.dataArray = this.es.getData();
    return this.dataArray;
    
  }
  addData(value) {
    let fullname;
    let id = this.dataArray.length + 1;
    fullname = value.fullname;
    let initials = value.initials;
    let title = value.title;
    let newData = new Data(id, fullname, initials, title);
    if (newData.initials !== this.model.initials) {
      this.dataArray.push(newData);
    }
  }

}
