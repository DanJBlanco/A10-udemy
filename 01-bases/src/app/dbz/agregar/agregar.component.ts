import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css'],
})
export class AgregarComponent {
  @Input('nuevo')
  public nuevo: Personaje = {
    nombre: '',
    poder: 0,
  };

  @Output('nuevoPersonaje')
  public onNewCharacter: EventEmitter<Personaje> = new EventEmitter<Personaje>();


  agregar() {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }
    // console.log(this.nuevo);
    this.onNewCharacter.emit(this.nuevo);

    this.nuevo = {
      nombre: '',
      poder: 0,
    };
  }
}
