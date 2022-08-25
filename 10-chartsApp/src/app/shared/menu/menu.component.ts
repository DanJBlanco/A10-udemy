import { Component, OnInit } from '@angular/core';

interface MenuItem {
  route: string;
  text: string;
}
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
    `
    li{
      cursor: pointer;
    }
    `
  ]
})
export class MenuComponent{

  menu: MenuItem[] = [
    {route: '/charts/bars', text:'Bars'},
    {route: '/charts/double-bars', text:'Double Bars'},
    {route: '/charts/donut', text:'Donut'},
    {route: '/charts/http-donut', text:'Http Donut'},
  ];
  constructor() { }
}
