import { Component } from '@angular/core';
import { NgxXml2jsonService } from 'ngx-xml2json';
import { Księgarnia } from './XmlModel/Ksiegarnia';
import { SerializeService } from './services/serialize.service';
import { FileService } from './services/file.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public ksiegarnia: Księgarnia;
  public xmlFile;
  public parser = new DOMParser();

  constructor(private ngxXml2jsonService: NgxXml2jsonService,
              private serializeService: SerializeService,
              private fileService: FileService) {}

  public loadXmlFile(event) {
    this.fileService.readFile(event.target.files[0], (e: any) => {
      const xmlDoc = this.parser.parseFromString(e.target.result, 'text/xml');
      this.xmlFile = xmlDoc;

      const obj = this.ngxXml2jsonService.xmlToJson(xmlDoc);
      this.ksiegarnia = new Księgarnia(obj);
      console.log(this.ksiegarnia);
    });
  }

  public async loadXsltFile(event) {
    this.fileService.readFile(event.target.files[0], (e: any) => {
      const xmlDoc = this.parser.parseFromString(e.target.result, 'text/xml');
      this.fileService.transformToXhtml(xmlDoc, this.xmlFile);
    });
  }

  public downloadActual() {
    const downloadFile = this.serializeService.objectToXml(this.ksiegarnia);
    this.fileService.downloadFile(downloadFile, 'text/xml', 'export.xml');
  }
}
