import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailValidatorService implements AsyncValidator{

  url = 'http://localhost:3000';
  constructor( readonly http: HttpClient) { }


  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    
    const email = control.value;
    return this.http.get<any[]>(`${this.url}/users?q=${email}`)
    .pipe(
      map( resp => {
        return (resp.length === 0 ? null : {emailExists: true} )
      })
    );
  }

  
}
