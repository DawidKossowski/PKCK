import {Attribute} from "./Attribute";
import {Kontakt} from "./Kontakt";

export class Tworca {

  public id: Attribute;
  public imię:  string;
  public nazwisko: string;
  public semestr: string;
  public indeks: string;
  public type: string;
  public kontakt: Kontakt;

  constructor(id, imie, nazwisko, semestr, indeks, kontakt) {
    this.id = new Attribute(id, 'idTwórcy');
    this.imię = imie;
    this.nazwisko = nazwisko;
    this.semestr = semestr;
    this.indeks = indeks;
    this.kontakt = new Kontakt(kontakt['email'], kontakt['telefon']);
    this.type = 'twórca';
  }

}
