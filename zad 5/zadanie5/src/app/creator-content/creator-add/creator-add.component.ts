import {Component, Input} from '@angular/core';
import {Tworca} from "../../XmlModel/Tworca";
import {Kontakt} from "../../XmlModel/Kontakt";

@Component({
  selector: 'app-creator-add',
  templateUrl: './creator-add.component.html',
  styleUrls: ['./creator-add.component.css']
})
export class CreatorAddComponent {

  @Input() content;
  idTworcy: string;
  imie: string;
  nazwisko: string;
  semestr: string;
  indeks: string;
  email: string;
  telefon: string;

  add() {
    const contact = new Kontakt(this.email, this.telefon);
    this.content['tworcy'].push(new Tworca(this.idTworcy, this.imie, this.nazwisko, this.semestr, this.indeks, contact));
  }

}
