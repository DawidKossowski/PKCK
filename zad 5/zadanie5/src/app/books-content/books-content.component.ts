import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-books-content',
  templateUrl: './books-content.component.html',
  styleUrls: ['./books-content.component.css']
})
export class BooksContentComponent {

  @Input() content;
  showAdd = false;

  add() {
    this.showAdd = !this.showAdd;
  }

  delete(index) {
    delete this.content['ksiazki'][index];
  }
}
