import { Injectable } from '@angular/core';
import { Księgarnia } from '../XmlModel/Ksiegarnia';
import { Tworcy } from '../XmlModel/Tworcy';
import { Ksiazki } from '../XmlModel/Ksiazki';
import { Dzialy } from '../XmlModel/Dzialy';

@Injectable()
export class LibraryService {
  private library: Księgarnia;

  setLibrary(library) {
    this.library = library;
  }

  getLibrary(): Księgarnia {
    return this.library;
  }

  getCreators(): Tworcy {
    return this.library.tworcy;
  }

  getBooks(): Ksiazki {
    return this.library.ksiazki;
  }

  getDepartments(): Dzialy {
    return this.library.dzialy;
  }

  getDepartmentsValue() {
    return this.getDepartments().definicjaDzialu;//.map(e => e.nazwa);
  }
}
