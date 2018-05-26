import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-department-content',
  templateUrl: './department-content.component.html',
  styleUrls: ['./department-content.component.css']
})
export class DepartmentContentComponent {

  @Input() content;
  showAdd = false;

  add() {
    this.showAdd = !this.showAdd;
  }

  delete(index) {
    delete this.content['definicjaDzialu'][index];
  }

}
