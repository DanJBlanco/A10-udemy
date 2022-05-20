import { Component, OnInit } from '@angular/core';
import { Hero, Publisher } from '../../interfaces/heros.interface';
import { HerosService } from '../../services/heros.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: [
    `
      img{
        width: 100%;
        border-radius: 5px;
      }
    `
  ],
})
export class AddComponent implements OnInit {
  publishers = [
    {
      id: 'DC Comics',
      descrip: 'DC-Comics',
    },
    {
      id: 'Marvel Comics',
      descrip: 'Marvel',
    },
  ];

  hero: Hero = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.MarvelComics,
    alt_img: '',
  };


  constructor(
    private _herosService: HerosService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {

    if(!this.router.url.includes('edit')){
      return;
    }
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this._herosService.getHeroById(id))
      )
      .subscribe((resp) => {
        this.hero = resp;});
  }

  save() {
    if (!this.validateHero()) {
      return;
    }

    if(!this.hero.id) {
      this._herosService
        .addHero(this.hero)
        .subscribe((hero) => {
          this.router.navigate(['/heros/edit', hero.id])
        })
    } else {
      this._herosService
        .updateHero(this.hero)
        .subscribe((hero) => {
          console.log('Hero update: ', hero);

          this.router.navigate(['/heros/edit', hero.id])
        })


    }

  }

  delete(){
    if(confirm('Are you sure to delete this record ?')){
      this._herosService.deleteHero(this.hero.id!)
      .subscribe( resp => {
        this.router.navigate(['/heros']);
      })
    }
  }

  validateHero(): boolean {
    if (this.hero.superhero.trim().length <= 0) {
      return false;
    }

    if (this.hero.alter_ego.trim().length <= 0) {
      return false;
    }
    if (this.hero.characters.trim().length <= 0) {
      return false;
    }
    if (this.hero.first_appearance.trim().length <= 0) {
      return false;
    }
    return true;
  }
}
