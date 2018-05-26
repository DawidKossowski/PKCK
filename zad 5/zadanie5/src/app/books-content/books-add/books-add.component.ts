import {Component, Input} from '@angular/core';
import {Autor} from "../../XmlModel/Autor";
import {Ksiazka} from "../../XmlModel/Ksiazka";

@Component({
  selector: 'app-books-add',
  templateUrl: './books-add.component.html',
  styleUrls: ['./books-add.component.css']
})
export class BooksAddComponent {

  @Input() content;
  id: string;
  dostepna: string;
  tytul: string;
  jezyk: string;
  dzial: string;
  rokWydania: number;
  cena: number;

  autorzy;
  liczbaAutorow: number;
  options = true;

  add() {
    const book = new Ksiazka(this.id, this.dostepna, this.tytul, this.autorzy, this.jezyk, this.dzial, this.rokWydania, this.cena);
    this.content['ksiazki'].push(book);
  }

  authorCountChange(event) {
    this.autorzy = [];
    for(let i = 0; i < event.target.value; i++) {
      this.autorzy.push(new Autor('', ''));
    }
  }

}
