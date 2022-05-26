import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
// import { namePattern, emailPattern, cantBeDwhyt } from '../../../shared/validators/valids';
import { ValidatorService } from '../../../shared/validators/validator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {

  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(this.validService.namePattern)]],
    email: ['', [Validators.required, Validators.pattern(this.validService.emailPattern)]],
    username: ['', [Validators.required, this.validService.cantBeDwhyt]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password_valid: ['', [Validators.required]]
  }, {
    validators: [this.validService.sameFields('password','password_valid')]
  });

  constructor( readonly fb: FormBuilder, readonly validService: ValidatorService) { }

  
  ngOnInit(): void { 
    this.myForm.reset({
      name: 'Nam Last',
      email: 'test@test.com',
      username: 'testname',
    })
  }

  invalidField(field: string){
    return this.myForm.controls[field].invalid &&
     this.myForm.controls[field].touched
  }

  onSubmit() {
    console.log(this.myForm.value);

    this.myForm.markAllAsTouched();
  }

}
