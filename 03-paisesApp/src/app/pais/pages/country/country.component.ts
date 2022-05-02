import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styles: [
  ]
})
export class CountryComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private _paisService: PaisService
    ) { }

  ngOnInit(): void {

    // this.activatedRoute.params.subscribe({
    //   next: (params: any) => {
    //     // console.log(params.countryId);
    //     this._paisService.getCountryById(params.countryId)
    //     .subscribe({
    //       next: (value) => {
    //         console.log(value);

    //       }
    //     });

    //   }
    // });


    this.activatedRoute.params
    .pipe(
      switchMap( (param: any) => this._paisService.getCountryById(param.countryId))
      )
    .subscribe({
      next: resp => {
        console.log(resp);

      }
    })
  }

}
