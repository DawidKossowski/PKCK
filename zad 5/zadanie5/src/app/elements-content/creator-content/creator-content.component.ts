import {Component, Input, OnInit} from '@angular/core';
import {Tworcy} from "../../XmlModel/Tworcy";
import {LibraryService} from "../../services/library.service";

@Component({
  selector: 'app-creator-content',
  templateUrl: './creator-content.component.html',
  styleUrls: ['./creator-content.component.css']
})
export class CreatorContentComponent implements OnInit {

  private content: Tworcy;
  private showAdd = false;

  constructor(private libraryService: LibraryService) {}

  ngOnInit() {
    this.content = this.libraryService.getCreators();
  }

  add(): void {
    this.showAdd = !this.showAdd;
  }

  delete(index): void {
    delete this.content['tworcy'][index];
  }
}
