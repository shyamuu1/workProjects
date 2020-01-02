import { Injectable } from '@angular/core';
import { Data } from './data';

@Injectable({
  providedIn: 'root'
})
export class ExportService {
  ObjMap = new Map();
  models:Data[] = [
    {
        id:1,
        fullname:'Shyam Vasanjee',
        initials:'INYSHKV',
        title: 'Developer'
    
      },
      {
          id:2,
          fullname:"John Doe",
          initials: 'INYJODO',
          title: 'Sales',
      }
];
  constructor() { }

  getData():Data[]{
    return this.models;
  }
  convertObjectToMap(){
    let ObjKVArray = [];
    
    for (const model of this.models) {
      ObjKVArray = Object.entries(model);
      for (const [key,value] of ObjKVArray) {
        this.ObjMap.set(key, value);
        console.log("Key: "+key +" Values: "+value);
      }
    }
    return this.ObjMap;
  }
  convertToCSV(){
    let obj = this.ObjMap;
    let header = [];
    let CSVFile = "";
    let cell = [];
    for(const key of obj.keys()){
      header.push(key);
      CSVFile = header.join(",");
      if(key == "title"){
        header.push("\n");
      }
      
      console.log("Columns: "+CSVFile)
    }
    return CSVFile;
    }
    downloadBlob(csvFile){
      let filename = "Form Results.csv";
      let blob = new Blob([csvFile], {type:'text/csv'});
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
