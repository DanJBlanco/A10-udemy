import { Component, OnInit } from '@angular/core';
import { Hero, Publisher } from '../../interfaces/heros.interface';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: [
  ]
})
export class AddComponent implements OnInit {

  publishers= [
    {
      id: 'DC Comics',
      descrip: 'DC-Comics'
    },
    {
      id: 'Marvel Comics',
      descrip: 'Marvel'
    }

  ];

  heroe: Hero = {
     superhero: '',
     alter_ego: '',
     characters: '',
     first_appearance: '',
     publisher: Publisher.MarvelComics,
     alt_img: '',
  }


  constructor() { }

  ngOnInit(): void {
  }

}
