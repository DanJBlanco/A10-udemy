import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styles: [
  ]
})
export class SortComponent implements OnInit {

  isUpper: boolean = false;

  items: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
          label: 'Update',
          icon: 'pi pi-refresh'
      },
      {
          label: 'Delete',
          icon: 'pi pi-times'
      },
      {
          label: 'Angular',
          icon: 'pi pi-external-link',
          url: 'http://angular.io'
      },
      {
          label: 'Router',
          icon: 'pi pi-upload',
          routerLink: '/fileupload'
      }
  ];
  }

  toggleUpper(){
    this.isUpper = !this.isUpper;
  }
}
