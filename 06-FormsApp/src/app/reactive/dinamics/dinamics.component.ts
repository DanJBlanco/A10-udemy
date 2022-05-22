import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamics',
  templateUrl: './dinamics.component.html',
  styles: [
  ]
})
export class DinamicsComponent implements OnInit {

  myForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favorities: this.fb.array([
      ['Game1'],
      ['GAme2']
    ], Validators.required),

  })

  get favArr(){
    return this.myForm.get('favorities') as FormArray;
  }
  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  isValidField(field: string){
    return this.myForm.controls[field].errors && this.myForm.controls[field].touched;
  }

  save(){
    if(this.myForm.invalid){
      this.myForm.markAllAsTouched();
      return;
    }
    this.myForm.reset();
  }

}
