import {Component, Input} from '@angular/core';
import {Autor} from "../../../XmlModel/Autor";
import {Ksiazka} from "../../../XmlModel/Ksiazka";
import {Ksiazki} from "../../../XmlModel/Ksiazki";

@Component({
  selector: 'app-books-add',
  templateUrl: './books-add.component.html',
  styleUrls: ['./books-add.component.css']
})
export class BooksAddComponent {

  @Input() content;
  @Input() departments;
  private id: string;
  private dostepna: string;
  private tytul: string;
  private jezyk: string;
  private dzial: string;
  private rokWydania: number;
  private cena: number;

  private autorzy;
  private options = true;

  add(): void {
    if(this.options) {
      this.autorzy = 'Praca zbiorowa';
    }
    const book = new Ksiazka(this.id, this.dostepna, this.tytul, this.autorzy, this.jezyk, this.dzial, this.rokWydania, this.cena);
    this.content['ksiazki'].push(book);
  }

  authorCountChange(event): void {
    this.autorzy = [];
    for(let i = 0; i < event.target.value; i++) {
      this.autorzy.push(new Autor('', ''));
    }
  }

}
