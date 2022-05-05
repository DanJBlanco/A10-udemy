import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = "https://restcountries.com/v3.1/";

  private fieldsFilter: string = 'flag,name,capital,pupolation,cca2';


  get params() {

    return new HttpParams()
    .set(
      'fields', 'flag,name,capital,pupolation,cca2'
      );

  }
  constructor(private _http: HttpClient) { }


  findByCountry(query: string): Observable<Country[]>{

    const url = `${this.apiUrl}/name/${query}`;

    return  this._http.get<Country[]>(url, {params: this.params});
  }

  findByCapital(capital: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${capital}`;
    return  this._http.get<Country[]>(url, {params: this.params});
  }

  getCountryById(id: string): Observable<Country> {
    const url = `${this.apiUrl}/alpha/${id}`;
    return  this._http.get<Country>(url);
  }

  getCountriesByRegion(region: string): Observable<Country[]>{
    const url = `${this.apiUrl}/region/${region}`;
    return  this._http.get<Country[]>(url, {params: this.params});
  }


}
