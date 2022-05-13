import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Color, Hero } from '../../interfaces/sells.interfaces';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styles: [
  ]
})
export class SortComponent {

  isUpper: boolean = false;
  orderBy: string = '';

  heros: Hero[] = [
    {
      name: 'Superman',
      fly: true,
      color: Color.blue
    },
    {
      name: 'Batman',
      fly: false,
      color: Color.black
    },
    {
      name: 'Robin',
      fly: false,
      color: Color.green
    },
    {
      name: 'Daredevil',
      fly: false,
      color: Color.red
    },
    {
      name: 'Greenlantern',
      fly: true,
      color: Color.green
    }
  ];

  toggleUpper(){
    this.isUpper = !this.isUpper;
  }

  changeSort(value: string): string{
    return this.orderBy = value;
  }

}
