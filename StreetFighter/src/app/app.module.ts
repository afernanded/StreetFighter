import {BrowserModule, Title} from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RetratoLuchadorComponent } from './components/retrato-luchador/retrato-luchador.component';
import {AreaSeleccionComponent} from "./components/area-seleccion/area-seleccion.component";
import { AtributosLuchadorComponent } from './components/atributos-luchador/atributos-luchador.component';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import {RouterModule} from "@angular/router";
import { AntesLucharComponent } from './components/antes-luchar/antes-luchar.component';
import {DetallesProductoGuardaService} from "../../../proyecto-productos/src/app/servicios/detalles-producto-guarda.service";
import {LuchadorResolveService} from "./servicios/luchador-resolve.service";
import {CargaProductoService} from "../../../proyecto-productos/src/app/servicios/carga-producto.service";
import {HttpClientModule} from "@angular/common/http";
import { ModificarRetratosComponent } from './components/modificar-retratos/modificar-retratos.component';
import {EditRetratoComponent} from "./components/edit-retrato/edit-retrato.component";

@NgModule({
  declarations: [
    AppComponent,
    AreaSeleccionComponent,
    RetratoLuchadorComponent,
    AreaSeleccionComponent,
    AtributosLuchadorComponent,
    BienvenidaComponent,
    AntesLucharComponent,
    ModificarRetratosComponent,
    EditRetratoComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        {path: 'bienvenida', component: BienvenidaComponent},
        {path: 'seleccion', component: AreaSeleccionComponent},
        {
          path: 'antes-luchar/:id',
          component: AntesLucharComponent,
          resolve: {
            luchador: LuchadorResolveService
          }
        },
        {
          path: 'modificar-retratos', component: ModificarRetratosComponent
        },
        {path: '', redirectTo: '/bienvenida', pathMatch: 'full'},
        {path: '**', redirectTo: '/bienvenida', pathMatch: 'full'},]
    )
  ],
  providers: [CargaProductoService, Title, DetallesProductoGuardaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
