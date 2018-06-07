import {Component, Input, OnInit} from '@angular/core';
import {DefinicjaDzialu} from "../../../XmlModel/DefinicjaDzialu";

@Component({
  selector: 'app-department-add',
  templateUrl: './department-add.component.html',
  styleUrls: ['./department-add.component.css']
})
export class DepartmentAddComponent implements OnInit {

  @Input() content;
  private lastId: number;
  public id: string;
  public nazwa: string;

  ngOnInit() {
    this.lastId = this.content['definicjaDzialu'].length;
    this.generateId();
  }

  generateId(): void {
    this.id = 'D' + ++this.lastId;
  }

  add(): void {
    this.content['definicjaDzialu'].push(new DefinicjaDzialu(this.id, this.nazwa));
    this.generateId();
  }
}
