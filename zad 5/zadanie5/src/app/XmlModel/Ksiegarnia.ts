import {Dzialy} from "./Dzialy";
import {Tworcy} from "./Tworcy";
import {Ksiazki} from "./Ksiazki";

export class Księgarnia {

  public tworcy: Tworcy;
  public ksiazki: Ksiazki;
  public dzialy: Dzialy;
  public type: string;

  constructor(ksiegarnia) {
    this.tworcy = new Tworcy(ksiegarnia.księgarnia.twórcy);
    this.ksiazki = new Ksiazki(ksiegarnia.księgarnia.książki);
    this.dzialy = new Dzialy(ksiegarnia.księgarnia.działy);
    this.type = 'księgarnia';
  }
}
