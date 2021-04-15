import {Component, Input, EventEmitter,OnInit, Output} from '@angular/core';
import {ILuchador} from "../../interfaces/iluchador";
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";

@Component({
  selector: 'app-retrato-luchador',
  templateUrl: './retrato-luchador.component.html',
  styleUrls: ['./retrato-luchador.component.scss']
})
export class RetratoLuchadorComponent implements OnInit {

  @Input() luchadores:ILuchador;

  @Input() numLuchadorSeleccionado;

  @Input() indiceLuchador: number;

  @Output() actualizarNumLuchadorSeleccionado = new EventEmitter<number>();

  imageSize = 180;

  imageSource;

  estaHover = false;

  estiloLuchadorHover = {
    'border': '5px solid',
  };

  actualizarPulsado() {
    this.actualizarNumLuchadorSeleccionado.emit(this.indiceLuchador);
  }

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.imageSource = this.sanitizer.bypassSecurityTrustResourceUrl(this.luchadores.retrato);
    this.estiloLuchadorHover['border-color'] = this.luchadores.colorAsociado;
  }

}
