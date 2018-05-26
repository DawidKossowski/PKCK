import {Component, Input, OnInit} from '@angular/core';
import {LibraryService} from '../services/library.service';
import {Dzialy} from '../XmlModel/Dzialy';

@Component({
  selector: 'app-department-content',
  templateUrl: './department-content.component.html',
  styleUrls: ['./department-content.component.css']
})
export class DepartmentContentComponent implements OnInit {

  private content: Dzialy;
  private showAdd = false;

  constructor(private libraryService: LibraryService) {}

  ngOnInit() {
    this.content = this.libraryService.getDepartments();
  }

  add(): void {
    this.showAdd = !this.showAdd;
  }

  delete(index): void {
    delete this.content['definicjaDzialu'][index];
  }
}
