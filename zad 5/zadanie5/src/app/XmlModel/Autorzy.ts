import { Autor } from './Autor';

export class Autorzy {
  public autorzy: Autor | Array<Autor> | string;
  public type: string;

  constructor(autorzy) {
    const content = autorzy['autor'];
    if (content instanceof Array) {
      this.autorzy = content.map(e => new Autor(e.imię, e.nazwisko));
      this.type = 'autorzy';
    } else if (content instanceof Object) {
      this.autorzy = new Autor(content.imię, content.nazwisko);
      this.type = 'autorzy';
    } else {
      this.autorzy = autorzy;
    }
  }
}
