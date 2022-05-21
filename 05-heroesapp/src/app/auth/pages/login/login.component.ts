import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../../interfaces/auth.interface';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {


  constructor(private _router: Router, private _authService: AuthService) { }

  ngOnInit(): void {
  }

  login() {
    //TODO: Request backend, return a user
    this._authService.login()
    .subscribe( authResponse => {
      if(authResponse.id){
        this._router.navigate(['./heros'])
      }
    });
  }
}
