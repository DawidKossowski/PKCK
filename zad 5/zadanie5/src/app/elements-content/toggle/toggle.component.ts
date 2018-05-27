import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent {

  @Input() name;

  toggleTree(e) {
    const parent = e.target.parentElement;
    const arrayClass = parent.className.split(' ');
    const index = arrayClass.indexOf('hideContent');
    if (index === -1) {
      parent.className += ' hideContent';
    } else {
      arrayClass.splice(index, 1);
      parent.className = arrayClass;
    }
  }
}
