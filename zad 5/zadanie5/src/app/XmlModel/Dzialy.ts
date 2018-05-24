import {DefinicjaDzialu} from "./DefinicjaDzialu";

export class Dzialy {
  public definicjaDzialu: Array<DefinicjaDzialu>;

  constructor(dzialy) {
    this.definicjaDzialu = dzialy['definicja-działu'].map(e => new DefinicjaDzialu(e['id'], e['nazwa']));
  }
}
