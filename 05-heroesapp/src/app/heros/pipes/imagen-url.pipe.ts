import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/heros.interface';

@Pipe({
  name: 'imagenUrl'
})
export class ImagenUrlPipe implements PipeTransform {

  transform(value: Hero, ...args: unknown[]): string {
    const response: string = `./assets/heros/${value.id}.jpg`
    return response;
  }

}
