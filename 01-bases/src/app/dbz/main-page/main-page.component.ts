import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  public personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000,
    },
    {
      nombre: 'Vegeta',
      poder: 7500,
    },
  ];

  public nuevo: Personaje = {
    nombre: '',
    poder: 0,
  };

  agregarNuevoPersonaje( arg_personaje: Personaje) {
    console.log('test');

    this.personajes.push(arg_personaje);
  }

  cambiarNombre(event: any) {
    console.log(event.target.value);
  }
}
