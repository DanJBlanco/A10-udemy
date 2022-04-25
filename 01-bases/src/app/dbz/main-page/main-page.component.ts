import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  public personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 7500
    }
  ]

  public nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  agregar() {
    if(this.nuevo.nombre.trim().length === 0){ return; }
    console.log(this.nuevo);

    this.personajes.push(this.nuevo);
    console.log(this.personajes);

    this.nuevo={
      nombre: '',
      poder: 0
    }
    // this.clearData(this.nuevo);
  }

  clearData(pj: Personaje): void{


    pj = {
      nombre: '',
      poder: 0
    }

  }

  cambiarNombre( event: any) {
    console.log(event.target.value);

  }
}
