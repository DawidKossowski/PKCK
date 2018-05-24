import { Component } from '@angular/core';
import { NgxXml2jsonService } from 'ngx-xml2json';
import {Księgarnia} from "./XmlModel/Ksiegarnia";
import * as FileSaver from "file-saver";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public ksiegarnia: Księgarnia;

  constructor(private ngxXml2jsonService: NgxXml2jsonService) {}

  public openFile(event) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(e.target.result, 'text/xml');

      const obj = this.ngxXml2jsonService.xmlToJson(xmlDoc);
      /*obj = obj.split('\\n').join('');
      obj = obj.split(' ').join('');
      obj = JSON.parse(obj);*/
      this.ksiegarnia = new Księgarnia(obj);
      console.log(this.ksiegarnia);
    };
    // reader.readAsDataURL(event.target.files[0]);
    reader.readAsText(event.target.files[0]);
  }

  public test(e) {
    e.name = 'chuj';
  }

  public download() {
    const blob = new Blob([JSON.stringify(this.ksiegarnia)], {
      type: 'text/xml'
    });
    FileSaver.saveAs(blob, 'export.xml');
  }

}
