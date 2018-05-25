import {Attribute} from "./Attribute";
import {RokWydania} from "./RokWydania";
export class Ksiazka {

  public id: Attribute;
  public dostepna:  Attribute;
  public tytuł: string;

  public język: string;
  public dział: string;
  public rokWydania: RokWydania;
  public cena: number;
  public type: string;

  constructor(id, dostepna, tytul, jezyk, dzial, rokWydania, cena) {
    this.id = new Attribute(id, 'id');
    this.dostepna = new Attribute(dostepna, 'dostępna');
    this.tytuł = tytul;
    this.język = jezyk;
    this.dział = dzial;
    this.rokWydania = new RokWydania(rokWydania, 'rok-wydania');
    this.cena = cena;
    this.type = 'książka';
  }
}
