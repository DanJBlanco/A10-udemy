import { Injectable } from '@angular/core';
import { FormControl, ValidationErrors, AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  public namePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  
  constructor() { }

  cantBeDwhyt( control: FormControl ): ValidationErrors | null {
    const value: string = control.value?.trim().toLowerCase();
    
    if(value === 'dwhyt'){
      return {
        noDwhyt: true
      }
    }
    return null;
  }

  sameFields( field_1: string, field_2: string){

    return ( formGroup: AbstractControl ): ValidationErrors | null => {
      
      const pass1 = formGroup.get(field_1)?.value;
      const pass2 = formGroup.get(field_2)?.value;
      
      if(pass1 != pass2){
        formGroup.get(field_2)?.setErrors({notEquals: true})
        return { notEquals: true}
      }
      formGroup.get(field_2)?.setErrors(null)
      return null

    }

  }
}
