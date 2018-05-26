import { Injectable } from '@angular/core';
import * as FileSaver from 'file-saver';

@Injectable()
export class FileService {
  readFile(file, onLoadCallback): void {
    const reader = new FileReader();
    reader.onload = onLoadCallback;
    reader.readAsText(file);
  }

  downloadFile(content, type, fileName) {
    const blob = new Blob([content], {
      type: type
    });

    FileSaver.saveAs(blob, fileName);
  }

  transformToXhtml(xsltFile, xmlFile, fileName): void {
    const xsltProcessor = new XSLTProcessor();
    xsltProcessor.importStylesheet(xsltFile);
    const result = xsltProcessor.transformToDocument(xmlFile);

    this.downloadFile(result.documentElement.outerHTML, 'text/xhtml', fileName);
  }
}
