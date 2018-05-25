export class Kontakt {
  public email: string;
  public telefon: string;
  public type: string;

  constructor(email, telefon) {
    this.email = email;
    this.telefon = telefon;
    this.type = 'kontakt';
  }
}
