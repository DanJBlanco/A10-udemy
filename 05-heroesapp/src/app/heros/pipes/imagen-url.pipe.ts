import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/heros.interface';

@Pipe({
  name: 'imagenUrl'
})
export class ImagenUrlPipe implements PipeTransform {

  transform(hero: Hero, ...args: unknown[]): string {

    if(!hero.id && !hero.alt_img){
      return `./assets/no-image.png`
    } else if ( hero.alt_img){
      return hero.alt_img
    } else {
      return `./assets/heros/${hero.id}.jpg`;
    }

  }

}
