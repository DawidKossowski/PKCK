export class DefinicjaDzialu {
  public id: string;
  public nazwa: string;
  public type: string;

  constructor(id, name) {
    this.id = id;
    this.nazwa = name;
    this.type = 'definicja-działu';
  }
}
