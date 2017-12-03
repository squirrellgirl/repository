import { Articolo } from './articolo/articolo.model';
import { Component, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  myArticolo: Articolo = new Articolo('Creare componenti Angular 2', 'Mario Rossi 2', 'Creare componenti con Angular 2 è molto semplice');
  //OPPURE
  // myArticolo: Articolo = {titolo: 'Creare componenti Angular 2',
  //           autore: 'Mario Rossi 2',
  //           testo: 'Creare componenti con Angular 2 è molto semplice.'};

  ngOnInit() {
    console.log(this.myArticolo);
  }

mostraMessaggioRingraziamento(event) {
    alert(`Grazie per aver espresso il tuo apprezzamento per l\'articolo! \n Il numero di apprezzamenti raggiunti
     è ${event.numApprezzamenti}` );
}
}
