import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styles: [
  ]
})
export class ResultadosComponent {

  get resultado(){
    return this._gifsServices.resultado;
  }
  
  constructor(private _gifsServices: GifsService) { }

}
