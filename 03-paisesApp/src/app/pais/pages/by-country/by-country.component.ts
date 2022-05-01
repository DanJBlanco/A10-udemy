import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
  ]
})
export class ByCountryComponent implements OnInit {

  termino: string = ''
  constructor() { }

  ngOnInit(): void {
  }

  buscar(): void{
    if(this.termino.trim().length === 0){
      return;
    }
    console.log(this.termino);

  }

}
