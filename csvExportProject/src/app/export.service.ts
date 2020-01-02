import { Injectable } from '@angular/core';
import { Data } from './data';

@Injectable({
  providedIn: 'root'
})
export class ExportService {
  ObjMap = new Map();
  models: Data[] = [
    {
      id: 1,
      fullname: 'Shyam Vasanjee',
      initials: 'INYSHKV',
      title: 'Developer'

    },
    {
      id: 2,
      fullname: "John Doe",
      initials: 'INYJODO',
      title: 'Sales',
    }
  ];
  constructor() { }
  //gets dummy data
  getData(): Data[] {
    return this.models;
  }
  //convert Object into Map
  convertObjectToMap() {
    let ObjKVArray = [];
    for (const model of this.models) {
      ObjKVArray = Object.entries(model);
      for (const [key, value] of ObjKVArray) {
        this.ObjMap.set(key, value);
        //console.log("Key: " + key + " Values: " + value);
      }
    }
    return this.ObjMap;
  }
  //Build Columns
  buildColumns() {
    let headers;
    let obj = this.ObjMap;
    let header = Array.from(obj.keys());
    headers = header.join(',');
    console.log(headers);
    return headers;
  }
  //Build Cells
  buildCells(){
    let obj = this.ObjMap;
    let header = Array.from(obj.keys());
    let cells = "";
    let cell = Array.from(obj.values());
    cells= cell.join(",");
    cell.forEach(row => {
      header.forEach(ele => {
        console.table("Row Value: "+row, "Element Value: "+ele);
      });
      console.log("Cells: "+cells);
    });
    return cells;
  }
  //Creates CSVFile
  getCSVFile(){
    let columns = this.buildColumns();
    let cells = this.buildCells();
    let newLine = "\n";
    let CSVFile = "".concat(columns, newLine, cells, newLine);
    console.log("File: "+CSVFile);
    return CSVFile;
  }
  //Dowload function for CSVFile
  downloadBlob(csvFile) {
    let filename = "Form Results.csv";
    let blob = new Blob([csvFile], { type: 'text/csv' });
    let flyLink = document.createElement("a");
    let URL = window.URL;
    let downloadUrl = URL.createObjectURL(blob);//creates string version of URL

    flyLink.href = downloadUrl;//link references URL download location
    flyLink.download = filename; // causes the download
    document.body.appendChild(flyLink);// adds fake link
    flyLink.click();// clickable link
    document.body.removeChild(flyLink);// removes link
    // when anchor tag is removed it causes the browser to download the file

  }
}
