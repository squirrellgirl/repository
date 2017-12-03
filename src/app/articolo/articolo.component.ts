import { Component, OnInit, Input } from '@angular/core';
import { Articolo } from './articolo.model';

@Component({
  selector: 'app-articolo',
  templateUrl: './articolo.component.html',
  styleUrls: ['./articolo.component.css']
})
export class ArticoloComponent implements OnInit {
  @Input() articolo: Articolo;
  constructor() { }

  ngOnInit() {
  }

      incrementaApprezzamenti(event) {
        this.articolo.numApprezzamenti = this.articolo.numApprezzamenti + 1;
        event.preventDefault();
    }

}
