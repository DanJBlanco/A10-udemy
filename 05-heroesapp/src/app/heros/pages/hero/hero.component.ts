import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/heros.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { HerosService } from '../../services/heros.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styles: [`
    img{
      width: 100%;
      border-radius: 5px;
    }
  `
  ]
})
export class HeroComponent implements OnInit {

  hero!: Hero;

  constructor(
    private activateRouted: ActivatedRoute,
    private _herosService: HerosService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activateRouted.params
    .pipe(
      switchMap( ({ id }) =>
        this._herosService.getHeroById(id) )
    )
    .subscribe({
      next: (heroResponse: Hero) => {
        this.hero = heroResponse
       }
    })
  }


  back(){
    this.router.navigate(['heros/list'])
  }
}
