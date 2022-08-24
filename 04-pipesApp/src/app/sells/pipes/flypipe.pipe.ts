import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'flypipe'
})
export class FlypipePipe implements PipeTransform {

  transform(value: boolean, ...args: unknown[]): string {
    return value ? 'fly': 'no fly' ;
  }

}
