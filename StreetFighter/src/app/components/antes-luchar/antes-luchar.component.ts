import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ILuchador} from "../../interfaces/iluchador";
import {CargarLuchadoresService} from "../../servicios/cargar-luchadores.service";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-antes-luchar',
  templateUrl: './antes-luchar.component.html',
  styleUrls: ['./antes-luchar.component.scss']
})
export class AntesLucharComponent implements OnInit {

  idLuchador: number;

  luchador: ILuchador;

  gifLuchador;

  gifLuchadorRandom;

  getRandom () {
    return Math.floor(Math.random() * 4) + 1;
  }

  constructor(private route: ActivatedRoute, private cargaLuchador: CargarLuchadoresService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.idLuchador = this.route.snapshot.params['id'];
    this.luchador = this.route.snapshot.data['luchador'];
    this.gifLuchador = this.sanitizer.bypassSecurityTrustResourceUrl(this.luchador.animacion);
    this.cargaLuchador.getLuchador(this.getRandom()).subscribe(
      //Si funciona,
      luchador => {
        this.gifLuchadorRandom =  this.sanitizer.bypassSecurityTrustResourceUrl(luchador.animacion);
      },
      //Si falla,
      error1 => console.log(error1),
      //Siempre ocurre
      () => console.log(this.luchador)
    );
  }

}
