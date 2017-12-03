import { Component, OnInit, OnChanges, Input, Output, EventEmitter, SimpleChange } from '@angular/core';
import { Articolo } from './articolo.model';

@Component({
  selector: 'app-articolo',
  templateUrl: './articolo.component.html',
  styleUrls: ['./articolo.component.css']
})
export class ArticoloComponent implements OnInit {
  @Input() articolo: Articolo;
  // @Output() like = new EventEmitter<number>();
  //OPPURE ANCORA MEGLIO
  @Output() like = new EventEmitter<{numApprezzamenti: number}>();
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {
            console.log(changes['articolo'].previousValue);
            console.log(changes['articolo'].currentValue);
        if (changes['articolo'] && changes['articolo'].currentValue.testo) {

            const testoArticolo = changes['articolo'].currentValue.testo;
            changes['articolo'].currentValue.testo = testoArticolo.replace('è', '\xE9') ;
        }
    }

      incrementaApprezzamenti(event) {
        this.articolo.numApprezzamenti = this.articolo.numApprezzamenti + 1;
        // this.like.emit(this.articolo.numApprezzamenti);
        //OPPURE ANCORA MEGLIO
        this.like.emit({numApprezzamenti: this.articolo.numApprezzamenti});
        event.preventDefault();
    }

}
