import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-creator-content',
  templateUrl: './creator-content.component.html',
  styleUrls: ['./creator-content.component.css']
})
export class CreatorContentComponent {

  @Input() content;
  showAdd = false;

  add() {
    this.showAdd = !this.showAdd;
  }

  delete(index) {
    delete this.content['tworcy'][index];
  }
}
