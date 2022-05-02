import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = "https://restcountries.com/v3.1/";

  constructor(private _http: HttpClient) { }


  findByCountry(query: string): Observable<Country[]>{

    const url = `${this.apiUrl}/name/${query}`;

    return  this._http.get<Country[]>(url);
  }

  findByCapital(capital: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${capital}`;
    return  this._http.get<Country[]>(url);
  }

  getCountryById(id: string): Observable<Country> {
    const url = `${this.apiUrl}/alpha/${id}`;
    return  this._http.get<Country>(url);
  }


}
