import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switchs',
  templateUrl: './switchs.component.html',
  styles: [
  ]
})
export class SwitchsComponent implements OnInit {
  user = {
    gender: 'F',
    notifications: false
  }

  termAndConditions: boolean = false;

  myForm: FormGroup = this.fb.group({
    gender: ['M', Validators.required],
    notifications: [true, Validators.required],
    terms: [false, Validators.requiredTrue]
  })
  
  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {

    this.myForm.reset({
      ...this.user,
      terms: false
    });

    this.myForm.valueChanges
    .subscribe( ({terms, ...rest}) => {
        // delete form.terms;
        this.user = rest;
      })
  }

  save(){
    const formValue = {...this.myForm.value};
    delete formValue.terms;

    this.user = formValue;
  }
}
