import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, map, of } from 'rxjs';
import { Auth } from '../interfaces/auth.interface';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _userAuth: Auth | undefined;
  private baseUrl: string = environment.baseUrl;

  get auth(){
    return {...this._userAuth};
  }

  constructor( private _http: HttpClient) { }

  verifyAuth(): Observable<boolean> {

    if(!localStorage.getItem('token')){
      return of(false);
    }

    return this._http.get<Auth>(`${this.baseUrl}/usuarios/1`)
                      .pipe(
                        map( auth => {
                          this._userAuth = auth;
                          return true;

                        })
                      );
  }


  login(): Observable<Auth>{
    return this._http.get<Auth>(`${this.baseUrl}/usuarios/1`)
                      .pipe(
                        tap(auth => this._userAuth = auth),
                        tap(auth =>localStorage.setItem('token',auth.id))
                        );
  }

  logOut(){
    this._userAuth = undefined;
    localStorage.removeItem('token');
  }
}
