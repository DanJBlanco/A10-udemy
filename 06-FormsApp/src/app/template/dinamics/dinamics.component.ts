import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Customer {
  name: string;
  favorities?: Favorite[]
}
interface Favorite {
  id: number | undefined;
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
      { id:1, name:'fav1'},
      { id:2, name:'fav2'}
    ]
  }

  newGame: string = '';

  save() {
    console.log('Post form');
  }

  delete(index: number) {
    this.customer.favorities?.splice(index,1);
  }

  addNewGame() {
    if( this.customer.favorities != undefined){
      const newFav : Favorite = {
        id: this.customer.favorities?.length + 1,
        name: this.newGame
      };
      
      this.customer.favorities?.push({...newFav});
      this.newGame = '';
    }

  }
}
