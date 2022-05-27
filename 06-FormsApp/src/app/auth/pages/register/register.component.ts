import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
// import { namePattern, emailPattern, cantBeDwhyt } from '../../../shared/validators/valids';
import { ValidatorService } from '../../../shared/validators/validator.service';
import { EmailValidatorService } from '../../../shared/validators/email-validator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {

  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(this.validService.namePattern)]],
    email: ['', [Validators.required, Validators.pattern(this.validService.emailPattern)], [this.emailValidator]],
    username: ['', [Validators.required, this.validService.cantBeDwhyt]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password_valid: ['', [Validators.required]]
  }, {
    validators: [this.validService.sameFields('password','password_valid')]
  });

  get emailErrorMsg(): string {
    const field = this.myForm.get('email');
    if( field?.getError('required') ){
      return 'Email is mandatory';
    } else if (field?.getError('emailExists') ) {

      return 'Email already exists';
    } else if (field?.getError('pattern') ) {

      return 'Value have to be email format EG: example@example.example';
    }
    return '';
  }

  constructor( readonly fb: FormBuilder, readonly validService: ValidatorService, readonly emailValidator: EmailValidatorService) { }

  
  ngOnInit(): void { 
    this.myForm.reset({
      name: 'Nam Last',
      email: 'test1@gmail.com',
      username: 'testname',
    })    
  }

  emailRequired() {
    return this.myForm.get('email')?.getError('required')
          && this.myForm.get('email')?.touched;
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
