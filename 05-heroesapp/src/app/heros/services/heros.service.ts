import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from '../interfaces/heros.interface';

@Injectable({
  providedIn: 'root'
})
export class HerosService {

  constructor( private http: HttpClient) { }

  getHeros(): Observable<Hero[]>{
    return this.http.get<Hero[]>("http://localhost:3000/heroes")
  }
}
