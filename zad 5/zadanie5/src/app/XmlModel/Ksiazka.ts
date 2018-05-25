import {Attribute} from "./Attribute";
import {RokWydania} from "./RokWydania";
import {Autor} from "./Autor";
import {Autorzy} from "./Autorzy";
export class Ksiazka {

  public id: Attribute;
  public dostepna:  Attribute;
  public tytuł: string;
  public autorzy: Autorzy;
  public język: string;
  public dział: string;
  public rokWydania: RokWydania;
  public cena: number;
  public type: string;

  constructor(id, dostepna, tytul, autorzy, jezyk, dzial, rokWydania, cena) {
    this.id = new Attribute(id, 'id');
    this.dostepna = new Attribute(dostepna, 'dostępna');
    this.tytuł = tytul;
    this.autorzy = new Autorzy(autorzy);
    this.język = jezyk;
    this.dział = dzial;
    this.rokWydania = new RokWydania(rokWydania, 'rok-wydania');
    this.cena = cena;
    this.type = 'książka';
  }
}
