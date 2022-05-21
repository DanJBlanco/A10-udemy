import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad, CanActivate {

  get auth(){
    return this._authService.auth;
  }

  constructor( private _authService: AuthService, private _router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this._authService.verifyAuth().pipe(
        tap( isAuthenticate => {
          if ( !isAuthenticate) {
            this._router.navigate(['./login'])
          }
        })
      );
  }


  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean > | Promise<boolean> | boolean {
      return this._authService.verifyAuth().pipe(
        tap( isAuthenticate => {
          if ( !isAuthenticate) {
            this._router.navigate(['./login'])
          }
        })
      );
  }
}
