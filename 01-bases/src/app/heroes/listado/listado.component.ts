import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['spiderman', 'iroman', 'hulk', 'hawk', 'cap. america']
  delHero: string = '';

  borrarHeroe(): void {

    this.delHero = this.heroes.shift() || '';
    console.log(this.delHero);

  }

}
