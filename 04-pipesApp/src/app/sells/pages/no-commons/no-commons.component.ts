import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-commons',
  templateUrl: './no-commons.component.html',
  styles: [
  ]
})
export class NoCommonsComponent {


  // i18nSelect
  user= {
    name:  'Jose',
    gender:  'mas'

  }

  ownDataMap= {
    'fem': 'her',
    'mas': 'him'

  }

  // i 18nPlural
  clients: string[] = ['Mary', 'Peter', 'John', 'Edith', 'Fer'];
  clientsMap= {
    '=0': 'We havent client in wating list.',
    '=1': 'We have a client in wating list',
    'other': 'We have # clients in wating list'
  }

  changeUser(){
    if(this.user.gender === 'mas'){
      this.user.name = 'Susana';
      this.user.gender = 'fem';
    }
    else {
      this.user.name = 'Jose';
      this.user.gender = 'mas';
    }
  }

  deleteUser(){
    this.clients.pop();
  }

}
