import { Component, OnInit } from '@angular/core';
import { Dzialy } from '../../XmlModel/Dzialy';
import { LibraryService } from '../../services/library.service';


@Component({
  selector: 'app-department-content',
  templateUrl: './department-content.component.html',
  styleUrls: ['./department-content.component.css']
})
export class DepartmentContentComponent implements OnInit {

  public content: Dzialy;
  public showAdd = false;

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
