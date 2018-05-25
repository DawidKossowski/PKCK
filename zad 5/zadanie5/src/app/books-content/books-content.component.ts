import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-books-content',
  templateUrl: './books-content.component.html',
  styleUrls: ['./books-content.component.css']
})
export class BooksContentComponent implements OnInit {

  @Input() content;

  ngOnInit() {
  }

  delete(index) {

  }

  add() {

  }

}
