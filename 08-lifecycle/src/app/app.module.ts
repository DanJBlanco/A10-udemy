import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PageOneComponent } from './pages/page-one/page-one.component';
import { ShowNameComponent } from './components/show-name/show-name.component';
import { NgModel, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PageOneComponent,
    ShowNameComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
