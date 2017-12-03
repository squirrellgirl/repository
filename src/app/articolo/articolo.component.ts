import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Articolo } from './articolo.model';

@Component({
  selector: 'app-articolo',
  templateUrl: './articolo.component.html',
  styleUrls: ['./articolo.component.css']
})
export class ArticoloComponent implements OnInit {
  @Input() articolo: Articolo;
  @Output() like = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

      incrementaApprezzamenti(event) {
        this.articolo.numApprezzamenti = this.articolo.numApprezzamenti + 1;
        this.like.emit(this.articolo.numApprezzamenti);
        event.preventDefault();
    }

}
