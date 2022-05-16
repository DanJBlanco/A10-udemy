import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import * as input from '@angular/material/input';
import { Hero } from '../../interfaces/heros.interface';
import { HerosService } from '../../services/heros.service';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styles: [
  ]
})
export class FindComponent implements OnInit {


  input     : string = '';
  heros     : Hero[] = [];
  errorMsj  : string = '';

  heroSelected: Hero | undefined;

  constructor(
    private _herosService: HerosService
  ) { }

  ngOnInit(): void {
  }

  searching(){
    this._herosService.getSuggest(this.input.trim())
    .subscribe( (heros) => {
      this.heros = heros;

      if (this.heros.length == 0){
        this.errorMsj = 'Not Found'
      }else{
        this.errorMsj ='';
      }

    } );

  }


  optionSelected( event: MatAutocompleteSelectedEvent ) {

    if(!event.option.value ){
      this.errorMsj = '';
      this.heroSelected = undefined;
      return;
    }

    const hero: Hero = event.option.value;
    this.input = hero.superhero;

    this._herosService.getHeroById(hero.id)
    .subscribe(
      hero => this.heroSelected = hero
    )

  }
}
