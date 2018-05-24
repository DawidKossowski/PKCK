import {Dzialy} from "./Dzialy";

export class Księgarnia {

  public tworcy;
  public ksiazki;
  public dzialy: Dzialy;
  public type: string;

  constructor(ksiegarnia) {
    this.dzialy = new Dzialy(ksiegarnia.księgarnia.działy);
    this.type = 'księgarnia';
  }
}
