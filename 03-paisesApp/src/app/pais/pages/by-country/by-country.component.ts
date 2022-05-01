import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interfaces';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
  ]
})
export class ByCountryComponent implements OnInit {

  termino: string = '';
  isError: boolean = false;
  countries: Country[] = [];
  constructor( private _paisService: PaisService) { }

  ngOnInit(): void {
  }

  buscar( termino: string): void{
    this.isError = false;
    this.termino = termino;
    if(this.termino.trim().length === 0){
      this.countries = [];
      return;
    }

    this._paisService.findByCountry(this.termino)
    .subscribe({
      next: countries => {
        this.countries = countries;
      },
      error: (err) => {
        this.isError = true;
        this.countries = [];
      },
      complete: () =>{
        console.log('Complete');
      }
    });


  }

  suggest(termino: string): void {
    this.isError = false;
    // TODO: crear sugerencias

  }
}
