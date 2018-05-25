import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-department-content',
  templateUrl: './department-content.component.html',
  styleUrls: ['./department-content.component.css']
})
export class DepartmentContentComponent implements OnInit {

  @Input() content;

  ngOnInit() {
  }

  delete(index) {
    delete this.content['definicjaDzialu'][index];
  }

}
