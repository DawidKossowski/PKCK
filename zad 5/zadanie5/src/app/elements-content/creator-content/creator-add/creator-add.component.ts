import {Component, Input, OnInit} from '@angular/core';
import { Tworca } from '../../../XmlModel/Tworca';
import { Kontakt } from '../../../XmlModel/Kontakt';

@Component({
  selector: 'app-creator-add',
  templateUrl: './creator-add.component.html',
  styleUrls: ['./creator-add.component.css']
})
export class CreatorAddComponent implements OnInit {

  @Input() content;
  private lastId: number;
  public idTworcy: string;
  public imie: string;
  public nazwisko: string;
  public semestr: string;
  public indeks: string;
  public email: string;
  public telefon: string;

  ngOnInit() {
    this.lastId = this.content['tworcy'].length;
    this.generateId();
  }

  generateId(): void {
    this.idTworcy = 'T' + ++this.lastId;
  }

  add(form): void {
    const contact = new Kontakt(this.email, this.telefon);
    this.content['tworcy'].push(new Tworca(this.idTworcy, this.imie, this.nazwisko, this.semestr, this.indeks, contact));
    form.reset();
    this.generateId();
  }

}
