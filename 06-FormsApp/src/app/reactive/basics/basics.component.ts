import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent implements OnInit {

  // myForm: FormGroup = new FormGroup({
  //   name  : new FormControl('Product Name 1'),
  //   price : new FormControl(1500),
  //   stock : new FormControl(2),
  // });

  myForm: FormGroup = this.fb.group({
    name: [, [Validators.required, Validators.minLength(3)] , ],
    price: [, [Validators.required, Validators.min(0)]],
    stock: [, [Validators.required, Validators.min(0)]]
  })


  fieldNotValid(field: string){
    return this.myForm.controls[field].errors && this.myForm.controls[field].touched;
  }


  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
    this.myForm.reset({
      name:'Product Name',
      price: 120
    })
  }

  save(){
    if(this.myForm.invalid){
      this.myForm.markAllAsTouched();
      return;
    }

    this.myForm.reset();

  }

}
