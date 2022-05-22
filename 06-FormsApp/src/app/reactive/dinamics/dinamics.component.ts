import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validator, Validators, FormControl } from '@angular/forms';

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

  newFav = this.fb.control('', Validators.required);

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

  addGame(){

    if(this.newFav.invalid) return;

    // this.favArr.push(this.fb.control(this.newFav.value))
    this.favArr.push(new FormControl(this.newFav.value, Validators.required));
    this.newFav.reset();

  }

  delGame(index: number){
    
    this.favArr.removeAt(index);

  }
}
