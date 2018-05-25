import { Tworca } from './Tworca';

export class Tworcy {

  public tworcy: Array<Tworca>;
  public type: string;

  constructor(tworcy) {
    this.tworcy = tworcy['twórca']
      .map(e => new Tworca(e['@attributes'].idTwórcy, e['imię'], e['nazwisko'], e['semestr'], e['indeks'], e['kontakt']));
    this.type = 'twórcy';
  }
}
