import {Component, Input, OnInit} from '@angular/core';
import {DefinicjaDzialu} from "../../XmlModel/DefinicjaDzialu";

@Component({
  selector: 'app-department-add',
  templateUrl: './department-add.component.html',
  styleUrls: ['./department-add.component.css']
})
export class DepartmentAddComponent implements OnInit {

  @Input() content;
  id: string;
  nazwa: string;

  ngOnInit() {
  }

  add() {
    console.log(this.id, this.nazwa);
    this.content['definicjaDzialu'].push(new DefinicjaDzialu(this.id, this.nazwa));
  }
}
