import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Hero } from '../interfaces/heros.interface';

@Injectable({
  providedIn: 'root'
})
export class HerosService {

  private baseUrl = environment.baseUrl;

  constructor( private http: HttpClient) { }

  getHeros(): Observable<Hero[]>{
    return this.http.get<Hero[]>(`${this.baseUrl}/heroes`)
  }


  getHeroById( id: any): Observable<Hero>{
    return this.http.get<Hero>(`${this.baseUrl}/heroes/${id}`);
  }


  getSuggest( input: string): Observable<Hero[]>{

    const params: Params = {
      'q':input,
      '_limit': 6
    }

    return this.http.get<Hero[]>(`${this.baseUrl}/heroes`, {params})
  }


  addHero(newHero: Hero): Observable<Hero> {
    return this.http.post<Hero>(`${this.baseUrl}/heroes`, newHero);
  }

  updateHero(updateHero: Hero): Observable<Hero> {
    return this.http.put<Hero>(`${this.baseUrl}/heroes/${updateHero.id}`, updateHero);
  }

  deleteHero(id: string): Observable<{}> {
    return this.http.delete<{}>(`${this.baseUrl}/heroes/${id}`);
  }

}
