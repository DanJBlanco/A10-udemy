import { Component } from '@angular/core';

interface MenuItem {
  text: string;
  route: string;
}
@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styles: [`
  li {
    cursor: pointer;
  }
  `
  ]
})
export class SidemenuComponent  {

  templateMenu: MenuItem[] = [
    {
      text: 'Basics',
      route: './template/basics'
    },
    {
      text: 'Dinamics',
      route: './template/dinamics'
    },
    {
      text: 'Swtichs',
      route: './template/switchs'
    },
  ]

  reactiveMenu: MenuItem[] = [
    {
      text: 'Basics',
      route: './reactive/basics'
    },
    {
      text: 'Dinamics',
      route: './reactive/dinamics'
    },
    {
      text: 'Swtichs',
      route: './reactive/switchs'
    },
  ]

}
