import {Component, Input, OnInit} from '@angular/core';
import {Ksiazki} from "../../XmlModel/Ksiazki";
import {LibraryService} from "../../services/library.service";

@Component({
  selector: 'app-books-content',
  templateUrl: './books-content.component.html',
  styleUrls: ['./books-content.component.css']
})
export class BooksContentComponent implements OnInit {

  public content: Ksiazki;
  private departments;
  private showAdd = false;

  constructor(private libraryService: LibraryService) {}

  ngOnInit() {
    this.content = this.libraryService.getBooks();
    console.log(this.content.ksiazki[0].autorzy.autorzy);
    this.departments = this.libraryService.getDepartmentsValue();
  }

  add(): void {
    this.showAdd = !this.showAdd;
  }

  delete(index): void {
    delete this.content['ksiazki'][index];
  }
}
