import { Component } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent{

  nameUpper: string = 'DANIEL';
  nameLower: string = 'daniel';
  fullName: string = 'dAniEl';

  date: Date = new Date();

}
