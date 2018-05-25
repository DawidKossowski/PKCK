export class Autor {
  public imię: string;
  public nazwisko: string;
  public type: string;

  constructor(imie, nazwisko) {
    this.imię = imie;
    this.nazwisko = nazwisko;
    this.type = 'autor';
  }
}
