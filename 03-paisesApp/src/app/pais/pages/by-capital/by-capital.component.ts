import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styles: [
  ]
})
export class ByCapitalComponent implements OnInit {

  termino: string = '';
  isError: boolean = false;
  countries: Country[] = [];


  constructor(private _paisService: PaisService) { }

  ngOnInit(): void {
  }

  buscar(termino: string): void{

    this.isError = false;
    this.termino = termino;
    if(this.termino.trim().length === 0){
      this.countries = [];
      return;
    }

    this._paisService.findByCapital(this.termino)
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
