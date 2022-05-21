import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent implements OnInit {

  @ViewChild('myForm') myForm!: NgForm;

  initForm = {
    product:'--',
    price: 50,
    stock: 50
  }

  constructor() { }

  ngOnInit(): void {
  }

  validName(): boolean {
    return this.myForm?.controls?.['product']?.invalid && 
    this.myForm?.controls?.['product']?.touched
  }

  validPrice(): boolean {
    return this.myForm?.controls?.['price']?.value < 0 && 
            this.myForm?.controls?.['price']?.touched
  }

  save() {
    this.myForm.resetForm({
      price: 0,
      stock: 0
    });
    console.log('myForm: ', this.myForm );
    
  }

}
