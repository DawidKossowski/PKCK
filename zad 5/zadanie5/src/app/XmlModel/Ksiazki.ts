import { Ksiazka } from './Ksiazka';

export class Ksiazki {

  public ksiazki: Array<Ksiazka>;
  public type: string;

  constructor(ksiazki) {
    this.ksiazki = ksiazki['książka']
      .map(e => new Ksiazka(e['@attributes'].id, e['@attributes'].dostępna, e['tytuł'], e['język'], e['dział'], e['rok-wydania'], e['cena']));
    this.type = 'książki';
  }
}
