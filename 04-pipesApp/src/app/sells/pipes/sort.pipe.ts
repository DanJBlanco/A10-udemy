import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/sells.interfaces';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: Hero[], orderBy: string = 'no value'): Hero[] {


    switch (orderBy) {
      case 'name':
        return value.sort((a,b) => ( a.name > b.name) ? 1 : -1);

      case 'fly':
        return value.sort((a,b) => ( a.fly < b.fly) ? 1 : -1)

      case 'color':
        return value.sort((a,b) => ( a.color > b.color) ? 1 : -1)
        
      default:
        return value;
    }
  }

}
