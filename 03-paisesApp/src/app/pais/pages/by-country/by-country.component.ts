import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interfaces';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [ `
    li{
      cursor: pointer;
    }
  `
  ]
})
export class ByCountryComponent implements OnInit {

  termino: string = '';
  isError: boolean = false;
  countries: Country[] = [];
  countriesRecomend: Country[] = [];
  constructor( private _paisService: PaisService) { }

  ngOnInit(): void {
  }

  buscar( termino: string): void{
    console.log('Buscar:');

    this.isError = false;
    this.termino = termino;
    if(this.termino.trim().length === 0){
      this.countries = [];
      return;
    }

    if(this.countriesRecomend.length > 0){
      this.countriesRecomend = [];

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
    this.termino = termino;
    this.countriesRecomend = [];

    if(termino.trim().length === 0){
      return;
    }

    this._paisService.findByCountry(termino)
      .subscribe({

        next: (countriesRecomend) => { this.countriesRecomend = countriesRecomend.splice(0,5) },
        error: ( () => {this.countriesRecomend = []} )
      })

  }
}
