import {Injectable} from '@angular/core';
import {ILuchador} from "../interfaces/iluchador";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CargarLuchadoresService {
  private URL_SERVER_LUCHADORES = 'http://localhost:3000/luchadores';

  constructor(private http:HttpClient) {

  }

  //Obtiene todos los lucahdores y los devuelve
  getLuchadores(): Observable<ILuchador []>{
    return this.http.get<ILuchador []>(this.URL_SERVER_LUCHADORES);
  }

  //Obtiene un luchador mediante una ID
  getLuchador(luchadorID: number): Observable<ILuchador>{
    return this.http.get<ILuchador>(this.URL_SERVER_LUCHADORES+"/"+luchadorID);
  }

  //Guardamos un luchador mediante un put
  guardarLuchador(luchador:ILuchador): Observable<ILuchador> {
    return this.http.put<ILuchador>(
      this.URL_SERVER_LUCHADORES+"/"+luchador.id,
      luchador);
  }
}
