import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'upperstring'
})
export class Upperstring implements PipeTransform {


  transform(value: string, ...args: any[]): string {

    const propertieTransforToUpper = args[0];

    return (propertieTransforToUpper) ? value.toUpperCase() : value.toLowerCase();
  }

}
