import { Component, OnInit } from '@angular/core';
import { Hero, Publisher } from '../../interfaces/heros.interface';
import { HerosService } from '../../services/heros.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

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

  hero: Hero = {
     superhero: '',
     alter_ego: '',
     characters: '',
     first_appearance: '',
     publisher: Publisher.MarvelComics,
     alt_img: '',
  }


  constructor(
    private _herosService: HerosService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    console.log(this.activatedRoute.params
      .pipe(
        switchMap(  => this._herosService.getHeroById() )
      )
      .subscribe( resp =>
        this.hero = resp
        ));

  }

  save(){

    if( !this.validateHero()){
      return;
    }
    this._herosService.addHero(this.hero)
    .subscribe( resp =>
      console.log('Save: ', resp)
      );
  }

  validateHero(): boolean{
      if(this.hero.superhero.trim().length <= 0){
        return false;
      }

      if(this.hero.alter_ego.trim().length <= 0){
        return false;
      }
      if(this.hero.characters.trim().length <= 0){
        return false;
      }
      if(this.hero.first_appearance.trim().length <= 0){
        return false;
      }
      return true;
  }
}
