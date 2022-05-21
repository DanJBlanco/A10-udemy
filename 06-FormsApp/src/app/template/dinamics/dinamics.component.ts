import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Customer {
  name: string;
  favorities?: Favorite[]
}
interface Favorite {
  id: string;
  name: string;
}
@Component({
  selector: 'app-dinamics',
  templateUrl: './dinamics.component.html',
  styles: [
  ]
})
export class DinamicsComponent {

  @ViewChild('myDinamicForm') myForm!: NgForm;

  customer: Customer = {
    name: 'Name1',
    favorities: [
      { id:"1", name:'fav1'},
      { id:"2", name:'fav2'}
    ]
  }

  save() {
    console.log('Post form');
  }

  delete(index: number) {
    this.customer.favorities?.splice(index,1);
  }
}
