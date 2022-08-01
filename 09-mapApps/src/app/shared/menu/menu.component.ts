import { Component, OnInit } from '@angular/core';

interface MenuItem {
  rute: string;
  name: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    
    `
  ]
})
export class MenuComponent {

  menuItems: MenuItem[] = [
    {
      rute: '/maps/fullscreen',
      name: 'FullScreen',
    },
    {
      rute: '/maps/zoom-range',
      name: 'Zoom Range',
    },
    {
      rute: '/maps/marks',
      name: 'Marks',
    },
    {
      rute: '/maps/properties',
      name: 'Properties',
    },
  ];



}
