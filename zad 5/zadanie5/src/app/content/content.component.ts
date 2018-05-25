import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnChanges {

  @Input() contents;
  public test = [];
  public end = [];

  /*ngOnInit() {
    this.initialize();
  }*/

  ngOnChanges() {
    console.log('test');
    this.initialize();
  }

  initialize() {
    console.log(this.contents);
    for (const prop in this.contents) {
      let temp = [];
      if (!this.contents.hasOwnProperty(prop)) {
        continue;
      }

      if (this.contents[prop] === undefined) {
        continue;
      }

      if (this.contents[prop] instanceof Object) {
        this.test.push(this.contents[prop]);
      } else {
        temp.push(prop);
        temp.push(this.contents[prop]);
        if (prop == 'type') {
          this.end.unshift(temp);
        } else {
          this.end.push(temp);
        }
      }
    }
  }

  valueChange(event, toChange) {
    this.contents[toChange] = event.target.value;
  }

  deleteElement(toDelete, x) {
    console.log(x);
  }

}
