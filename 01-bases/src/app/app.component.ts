import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template:'<span>Dany</span>',
  // template:`
  //   <h1>  Template</h1>
  // `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public titulo: string = 'Contador';
  public numero: number = 10;

  public base: number = 5;

  acumular( val: number ):number {
    return this.numero += val;
  }

}
