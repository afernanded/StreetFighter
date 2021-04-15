import {Component, HostListener, OnInit} from '@angular/core';
import {CargarLuchadoresService} from "../../servicios/cargar-luchadores.service";
import {ILuchador} from "../../interfaces/iluchador";
import {DomSanitizer, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-area-seleccion',
  templateUrl: './area-seleccion.component.html',
  styleUrls: ['./area-seleccion.component.scss']
})
export class AreaSeleccionComponent implements OnInit {

  luchadores: ILuchador [];

  numLuchadorSeleccionado = -1;//Ningun jugador esta seleccionado

  gifSource;

  titulo = 'PLAYER SELECT';

  sing = '©Alexander Fernández Díaz - 2021 -'

  constructor(private cargaLuchador: CargarLuchadoresService, private sanitizer: DomSanitizer,  private titleService: Title) {
  }

  ngOnInit(): void {
    this.cargaLuchador.getLuchadores().subscribe(
      //Si funciona,
      luchadores => {
        this.luchadores = luchadores;
      },
      //Si falla,
      error => console.log(error),
      //Siempre ocurre
      () => console.log('Se completo el observable')
    );
    this.titleService.setTitle('Seleccion');
  }

  actualizarIndice(nuevoIndice: number) {
    if (nuevoIndice === this.numLuchadorSeleccionado) {
      this.numLuchadorSeleccionado = -1;
    } else {
      this.numLuchadorSeleccionado = nuevoIndice;
      this.gifSource = this.sanitizer.bypassSecurityTrustResourceUrl(this.luchadores[nuevoIndice].animacion);
    }
  }

  actualizarIndiceTeclado(nuevoIndice: number) {
    if (nuevoIndice === this.numLuchadorSeleccionado) {
      this.numLuchadorSeleccionado = nuevoIndice;
    } else {
      this.numLuchadorSeleccionado = nuevoIndice;
      this.gifSource = this.sanitizer.bypassSecurityTrustResourceUrl(this.luchadores[nuevoIndice].animacion);
    }
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    if (event.defaultPrevented) {
      return; //No hacemos nada si el evento ya esta siendo procesado
    }
    switch (event.key) {
      case "ArrowDown":
        if (this.numLuchadorSeleccionado + 2 >= this.luchadores.length) {
          this.actualizarIndiceTeclado(this.numLuchadorSeleccionado);
        } else if (this.numLuchadorSeleccionado != -1) {
          this.actualizarIndiceTeclado(this.numLuchadorSeleccionado + 2);
        }
        console.log('↓');
        break;
      case "ArrowUp":
        if (this.numLuchadorSeleccionado - 2 < 0) {
          this.actualizarIndiceTeclado(this.numLuchadorSeleccionado);
        } else {
          this.actualizarIndiceTeclado(this.numLuchadorSeleccionado - 2);
        }
        console.log('↑');
        break;
      case "ArrowLeft":
        if (this.numLuchadorSeleccionado - 1 < 0 || this.numLuchadorSeleccionado === 2) {
          this.actualizarIndiceTeclado(this.numLuchadorSeleccionado);
        } else {
          this.actualizarIndiceTeclado(this.numLuchadorSeleccionado - 1);
        }
        console.log('←');
        break;
      case "ArrowRight":
        if (this.numLuchadorSeleccionado + 1 >= this.luchadores.length || this.numLuchadorSeleccionado === 1) {
          this.actualizarIndiceTeclado(this.numLuchadorSeleccionado);
        } else if (this.numLuchadorSeleccionado != -1) {
          this.actualizarIndiceTeclado(this.numLuchadorSeleccionado + 1);
        }
        console.log('→');
        break;
      case "Enter":
        if (this.numLuchadorSeleccionado === -1) {
          this.actualizarIndiceTeclado(0);
        }
        console.log('Enter');
        break;
      case "Escape":
        this.actualizarIndice(this.numLuchadorSeleccionado);
        console.log('Esc');
        break;
      default:
        return;
    }
    // Cancela la accion por defecto para prevenir que la usemos dos veces
    event.preventDefault();
  }
}



