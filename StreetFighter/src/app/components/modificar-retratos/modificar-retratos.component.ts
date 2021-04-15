import { Component, OnInit } from '@angular/core';
import {ILuchador} from "../../interfaces/iluchador";
import {Title} from "@angular/platform-browser";
import {CargarLuchadoresService} from "../../servicios/cargar-luchadores.service";

@Component({
  selector: 'app-modificar-retratos',
  templateUrl: './modificar-retratos.component.html',
  styleUrls: ['./modificar-retratos.component.scss']
})
export class ModificarRetratosComponent implements OnInit {

  luchadores: ILuchador[];

  constructor(private titleService: Title, private cargarLuchadores: CargarLuchadoresService) { }

  ngOnInit(): void {
    this.titleService.setTitle("Modificar Retratos");
    this.cargarLuchadores.getLuchadores().subscribe(
      luchadores => {
        this.luchadores = luchadores;
      }
    );
  }
}
