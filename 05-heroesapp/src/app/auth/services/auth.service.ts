import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
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


  login(): Observable<Auth>{
    return this._http.get<Auth>(`${this.baseUrl}/usuarios/1`)
                      .pipe( tap(auth => this._userAuth = auth));
  }

  logOut(){
    this._userAuth = undefined;
  }
}
