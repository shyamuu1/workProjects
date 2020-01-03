import { Injectable } from '@angular/core';
import { Data } from './data';
import { DUMMYDATA } from './constans';

@Injectable({
  providedIn: 'root'
})
export class ExportService {
  ObjMap = new Map();
  constructor() { }
  //gets dummy data
  getData(): Data[] {
    return DUMMYDATA;
  }
  //convert Object into Map
  // convertObjectToMap() {
  //   let ObjKVArray = [];
  //   for (const model of this.models) {
  //     ObjKVArray = Object.entries(model);
  //     for (const [key, value] of ObjKVArray) {
  //       this.ObjMap.set(key, value);
  //     }
  //   }
  //   return this.ObjMap;
  // }
  convertObjValuesToArray(models) {
    let values = []; 
    for (const model of models) {
      values.push(Object.values(model));
    }
    return values;
  }
  //Build Columns
  buildColumns(models) {
    let headers;
    let header = Object.keys(models[0]);
    headers = header.join(',');
    return headers;
  }
  //Build Cells
  buildCells(models) {
    let header = Object.keys(models[0]);
    let cell = this.convertObjValuesToArray(models);
    let cells = "";

    cell.forEach(row => {
      cells += row + ",";
      header.forEach(ele => {
        if (ele === "title") {
          cells += "\n";
        }
        console.log("Row Value: " + row + " | " + "Element Value: " + ele);
      });
      console.log("Cells: " + cells);
    });
    return cells;
  }
  //Creates CSVFile
  getCSVFile(models) {
    let columns = this.buildColumns(models);
    let cells = this.buildCells(models);
    let newLine = "\n";
    let CSVFile = "".concat(columns, newLine, cells);
    console.log("File: " + CSVFile);
    return CSVFile;
  }
  //Dowload function for CSVFile
  downloadBlob(models) {
    let filename = "Form Results.csv";
    let csvFile = this.getCSVFile(models);
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
