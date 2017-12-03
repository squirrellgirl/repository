export class Articolo {
    titolo: string;
    autore: string;
    testo: string;
    numApprezzamenti?: number = 0;

  constructor (titolo ?: string, autore ?: string, testo ?: string, numApprezzamenti ?: number) {
    this.titolo = titolo;
    this.autore = autore;
    this.testo = testo;
    this.numApprezzamenti = 0;
  }
}
