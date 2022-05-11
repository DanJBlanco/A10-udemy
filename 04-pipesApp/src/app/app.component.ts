import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  name: string = 'daniEl blanCO';
  value: number = 1000;
  obj = {
    name: 'Daniel'
  }

  printName() {
    console.log(this.name);
    console.log(this.value);
    console.log(this.obj);

  }
}
