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

  constructor(private es: ExportService) { }

  ngOnInit() {
    this.getObjectMap();
    this.fillDataArray();
  }
  onSubmit(value) {
    this.submitted = true;
    // add it to the list
    this.addData(value);
    // convert to csv
    let csv = this.es.convertToCSV();
    // dowload csv to browser
    //this.es.downloadBlob(csv);
  }
  getObjectMap() {
    return this.es.convertObjectToMap();
  }
  fillDataArray(): void {
    let datas = this.es.getData();
    this.dataArray = datas;
    this.model = datas[0];
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
