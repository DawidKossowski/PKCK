import { Component, Input, OnInit } from '@angular/core';
import { Autor } from '../../../XmlModel/Autor';
import { Ksiazka } from '../../../XmlModel/Ksiazka';

@Component({
  selector: 'app-books-add',
  templateUrl: './books-add.component.html',
  styleUrls: ['./books-add.component.css']
})
export class BooksAddComponent implements OnInit {

  @Input() content: Ksiazka;
  @Input() departments: Array<string>;
  private lastId: number;
  public id: string;
  public dostepna: string;
  public tytul: string;
  public jezyk: string;
  public dzial: string;
  public rokWydania: number;
  public cena: number;

  public liczbaAutorow;
  public autorzy;
  public options = true;

  ngOnInit() {
    this.lastId = this.content['ksiazki'].length;
    this.generateId();
  }

  generateId(): void {
    this.id = 'K' + ++this.lastId;
  }

  add(): void {
    if (this.options) {
      this.autorzy = 'Praca zbiorowa';
    }
    const book = new Ksiazka(this.id, this.dostepna, this.tytul, this.autorzy, this.jezyk, this.dzial, this.rokWydania, this.cena);
    this.content['ksiazki'].push(book);
    this.generateId();
  }

  authorCountChange(event): void {
    this.autorzy = [];
    for (let i = 0; i < event.target.value; i++) {
      this.autorzy.push(new Autor('', ''));
    }
  }

}
