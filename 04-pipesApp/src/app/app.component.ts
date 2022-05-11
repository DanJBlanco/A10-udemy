import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'app';

  name: string = 'daniEl blanCO';
  value: number = 1000;
  obj = {
    name: 'Daniel'
  }

  constructor ( private primengConfig: PrimeNGConfig){

  }
  
  ngOnInit(): void {

    this.primengConfig.ripple = true;
  }

  printName() {
    console.log(this.name);
    console.log(this.value);
    console.log(this.obj);

  }
}
