import { Component, Input, OnInit } from '@angular/core';
import { Hero, Publisher } from '../../interfaces/heros.interface';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styles: [`
  mat-card {
    margin-top: 20px;
  }`
  ]
})
export class HeroCardComponent implements OnInit {

  @Input('heroCard') heroCardC!: Hero;

  constructor() {}

  ngOnInit(): void {
  }

}
