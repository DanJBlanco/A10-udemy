import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/heros.interface';
import { HerosService } from '../../services/heros.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [`

  mat-card {
    margin-top: 20px;
  }
  `
  ]
})
export class ListComponent implements OnInit {


  heros: Hero[] = [];

  constructor(private _herosService: HerosService) { }

  ngOnInit(): void {
    this._herosService.getHeros()
    .subscribe( resp =>  this.heros = resp );

  }




}
