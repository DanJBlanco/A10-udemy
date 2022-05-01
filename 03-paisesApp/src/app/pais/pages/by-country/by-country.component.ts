import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { SearchContryNameResponse } from '../../interfaces/search.interfaces';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
  ]
})
export class ByCountryComponent implements OnInit {

  termino: string = '';
  isError: boolean = false;
  constructor( private _paisService: PaisService) { }

  ngOnInit(): void {
  }

  buscar(): void{
    this.isError= false;
    if(this.termino.trim().length === 0){
      return;
    }

    this._paisService.findByCountry(this.termino)
    .subscribe(
      (resp: SearchContryNameResponse[]) => {
        console.log(resp[0].name);
      },
      (err) => {
        this.isError = true;
      }
    );


  }

}
