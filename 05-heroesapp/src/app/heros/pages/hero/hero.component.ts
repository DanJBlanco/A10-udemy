import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/heros.interface';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { HerosService } from '../../services/heros.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styles: [
  ]
})
export class HeroComponent implements OnInit {

  hero!: Hero;

  constructor(
    private activateRouted: ActivatedRoute,
    private _herosService: HerosService
  ) { }

  ngOnInit(): void {
    this.activateRouted.params
    .pipe(
      switchMap( ({ id }) =>
        this._herosService.getHeroById(id) ),
      tap( console.log)
    )
    .subscribe({
      next: (heroResponse: Hero) => {
        this.hero = heroResponse
       }
    })
  }

}
