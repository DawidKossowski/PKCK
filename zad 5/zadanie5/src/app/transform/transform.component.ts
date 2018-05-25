import {Component, Input} from '@angular/core';
import {FileService} from "../services/file.service";

@Component({
  selector: 'app-transform',
  templateUrl: './transform.component.html',
  styleUrls: ['./transform.component.css']
})
export class TransformComponent {

  @Input() xmlFile;
  private xmlDoc;
  public fileName: string;
  private parser = new DOMParser();

  constructor(private fileService: FileService) {}

  public loadXsltFile(event) {
    this.fileService.readFile(event.target.files[0], (e: any) => {
      this.xmlDoc = this.parser.parseFromString(e.target.result, 'text/xml');
    });
  }
  public downloadTransformation() {
    this.fileService.transformToXhtml(this.xmlDoc, this.xmlFile, this.fileName);
  }
}
