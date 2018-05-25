import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-creator-content',
  templateUrl: './creator-content.component.html',
  styleUrls: ['./creator-content.component.css']
})
export class CreatorContentComponent implements OnInit {

  @Input() content;

  ngOnInit() {
  }

  delete(index) {
    delete this.content['tworcy'][index];
  }
}
