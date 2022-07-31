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
  borders: SmallCountry[] = [];
  bordersCode: string[] = [];

  // UI
  loading: boolean = false;


  constructor(readonly fb: FormBuilder,
            readonly countriesServices: CountriesService) { }

  ngOnInit(): void {
    this.regions = this.countriesServices.regions;

    this.myForm.get('region')?.valueChanges
    .pipe(
      tap( ( _ ) => {
        this.myForm.get('country')?.reset('');
        this.loading = true;
      }),
      switchMap( region => this.countriesServices.getCountriesByRegion(region))
    )
    .subscribe( countries => {      
      this.countries = countries;
      this.loading = false;
    })


    // When country change
    this.myForm.get('country')?.valueChanges
    .pipe(
      tap( ( _ ) => {
        this.bordersCode = [];
        this.myForm.get('border')?.reset('');
        this.loading = true;
      }),
      switchMap( countryCode => this.countriesServices.getCountriesByCode(countryCode)),
      switchMap( countryFull =>  this.countriesServices.getCountriesCode(countryFull!))
      )
    .subscribe( countriesNames => {
      
      console.log(countriesNames);
      countriesNames.forEach(country =>{
        this.borders.push(country)
      })
      this.loading = false;
      
    });

    


  }

  save(){
    console.log('Function Save');
    
  }
}
