import { Component } from '@angular/core';

@Component({
  selector: 'app-switchs',
  templateUrl: './switchs.component.html',
  styles: [
  ]
})
export class SwitchsComponent{
  user = {
    gender: '',
    notification: false
  }

  termAndConditions: boolean = false;
}
