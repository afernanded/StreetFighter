import {Component, Input, OnInit} from '@angular/core';
import {ILuchador} from "../../interfaces/iluchador";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import {CargarLuchadoresService} from "../../servicios/cargar-luchadores.service";

@Component({
  selector: 'app-edit-retrato',
  templateUrl: './edit-retrato.component.html',
  styleUrls: ['./edit-retrato.component.scss']
})
export class EditRetratoComponent implements OnInit {

  @Input() luchadores: ILuchador[];

  @Input() idLuchador: number;

  @Input() imagenAl: string;

  rutaImagen: SafeResourceUrl;

  constructor(private sanitazer: DomSanitizer, private cargarLuchadores:CargarLuchadoresService) {
  }

  ngOnInit(): void {
    this.rutaImagen = this.sanitazer.bypassSecurityTrustResourceUrl(this.luchadores[this.idLuchador].retrato);
  }

  public onChange(fileList: FileList): void {
    let file = fileList[0];
    let fileReader: FileReader = new FileReader();
    let self = this;
    if(file){
      fileReader.readAsDataURL(file);
    }
    fileReader.onloadend = function(x) {
      self.rutaImagen = self.sanitazer.bypassSecurityTrustResourceUrl(fileReader.result as string);
      self.luchadores[self.idLuchador].retrato = fileReader.result as string;
    }
  }

  setLuchador(){
    this.cargarLuchadores.guardarLuchador(this.luchadores[this.idLuchador]).subscribe(
      mensaje => {
        console.log("Retrato modificado!");
      }
    )
  }

}
