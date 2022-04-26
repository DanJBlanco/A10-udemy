import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {

  // @Input("data")
  // public personajes: Personaje[] = [];

  get personajes() {
    return this._dbzService.personajes;
  }

  constructor ( public _dbzService: DbzService ){

  }

}
