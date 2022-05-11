import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// Router
import { AppRouterModule } from './app-router.module';

// Custom Moduls
import { SharedModule } from './shared/shared.module';
import { SellsModule } from './sells/sells.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    SharedModule,
    SellsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
