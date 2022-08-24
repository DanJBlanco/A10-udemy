import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interfaces';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [
  ]
})
export class ByRegionComponent {

  regions: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania']
  activeRegion: string = '';
  countriesRegion: Country[] = [];

  constructor(private _countriesService: PaisService) { }

  getClassCss( region: string): string{

    return (region === this.activeRegion) ? 'btn btn-primary mx-2': 'btn btn-outline-primary mx-2';

  }


  activateRegion(region: string){
    if ( region === this.activeRegion ){
      return;
    }
    this.activeRegion = region;
    this.getCountries(this.activeRegion);

  }

  getCountries( region: string ) {



    this._countriesService.getCountriesByRegion(region)
    .subscribe({
      next: countries => {
        this.countriesRegion = countries;
      },
      error: (err) => {
        this.countriesRegion = [];
      },
      complete: () =>{
        console.log('Complete');
      }
    });

  }

}
