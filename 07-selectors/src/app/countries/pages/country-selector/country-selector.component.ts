import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountriesService } from '../../services/countries-service.service';
import { SmallCountry, FullCountry } from '../../interfaces/countries.interfaces';
import { switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-country-selector',
  templateUrl: './country-selector.component.html',
  styles: [
  ]
})
export class CountrySelectorComponent implements OnInit {

  myForm: FormGroup = this.fb.group({
    region: ['', Validators.required],
    country: ['', Validators.required],
    border: ['', Validators.required],

  })

  // Fill selectors
  regions: string[] = [];
  countries: SmallCountry[] = [];
  borders: string[] = [];

  constructor(readonly fb: FormBuilder,
            readonly countriesServices: CountriesService) { }

  ngOnInit(): void {
    this.regions = this.countriesServices.regions;

    // When Regions change

    // this.myForm.get('region')?.valueChanges
    //   .subscribe( region => {
        
    //     this.countriesServices.getCountriesByRegion(region)
    //     .subscribe( countries => {
    //       console.log(countries);
    //       this.countries = countries;
    //     })

    //   })

    this.myForm.get('region')?.valueChanges
    .pipe(
      tap( ( _ ) => {
        this.myForm.get('country')?.reset('')
      }),
      switchMap( region => this.countriesServices.getCountriesByRegion(region))
    )
    .subscribe( countries => {      
      this.countries = countries;
    })


    // When country change
    this.myForm.get('country')?.valueChanges
    .pipe(
      tap( ( _ ) => {
        this.myForm.get('border')?.reset('')
      }),
      switchMap( countryCode => this.countriesServices.getCountriesByCode(countryCode))
    )
    .subscribe( (countryNew ): void => {
      countryNew?.forEach(element => {
        this.borders  =element.borders;
      });
      
    });


  }

  save(){
    console.log('Function Save');
    
  }
}
