import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { combineLatest, Observable, of } from 'rxjs';
import { SmallCountry, FullCountry } from '../interfaces/countries.interfaces';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private urlBase: string = 'https://restcountries.com/v3.1';
  private fields: string = '?fields=cca3,name,borders'

  private _regions: string[] = [
    'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'
  ]

  get regions(): string[] {
    return [...this._regions];
  }

  constructor( readonly http : HttpClient ) { }

  getCountriesByRegion( region: string): Observable<SmallCountry[]> {
    const url: string = `${this.urlBase}/region/${region}/${this.fields}`
    return this.http.get<SmallCountry[]>(url);
  }
  getCountriesByCode( code: string): Observable<FullCountry[] | null> {
    if(!code){
      return of(null)
    }
    const url: string = `${this.urlBase}/alpha/${code}`
    return this.http.get<FullCountry[]>(url);
  }
  
  getNameCountriesByCode( code: string ): Observable<SmallCountry> {
    const url: string = `${this.urlBase}/alpha/${code}${this.fields}`
    return this.http.get<SmallCountry>(url);
  }

  getCountriesCode( fullcountry: FullCountry[] | null): Observable<SmallCountry[]> {

    if (!fullcountry) {
      return of([]);
    }

    let borders: string[] = [];

    fullcountry.forEach(country => {
      borders = country.borders;
    });

    const requests: Observable<SmallCountry>[] = [];

    borders.forEach( code => {
      const request = this.getNameCountriesByCode(code);
      requests.push(request);
    });

    return combineLatest( requests );

  }
}
