import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';

import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interfaces';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styles: [
  ]
})
export class CountryComponent implements OnInit {

  country!: Country[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private _paisService: PaisService
    ) { }

  ngOnInit(): void {

    this.activatedRoute.params
    .pipe(
      switchMap( (param: any) => this._paisService.getCountryById(param.countryId)),
      tap( console.log)
      )
    .subscribe({
      next: pais => {
        // console.log(pais);
        this.country = pais;

      }
    })
  }

}
