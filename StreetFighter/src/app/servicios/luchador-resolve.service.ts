import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from "@angular/router";
import {ILuchador} from "../interfaces/iluchador";
import {CargarLuchadoresService} from "./cargar-luchadores.service";
import {catchError} from "rxjs/operators";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LuchadorResolveService implements Resolve<ILuchador>{

  constructor(private cargaLuchador: CargarLuchadoresService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ILuchador> {
    return this.cargaLuchador.getLuchador(route.params['id']).pipe(
      catchError( error => {
        this.router.navigate(['/bienvenida']);
        return of(null);
        }
      )
    )
  }
}
