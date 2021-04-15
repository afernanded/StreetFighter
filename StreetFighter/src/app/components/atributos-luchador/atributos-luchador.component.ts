import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-atributos-luchador',
  templateUrl: './atributos-luchador.component.html',
  styleUrls: ['./atributos-luchador.component.scss']
})
export class AtributosLuchadorComponent implements OnInit {

  @Input() fuerza: number;

  @Input() destreza: number;

  @Input() vida: number;

  constructor() { }

  ngOnInit(): void {
  }

}
