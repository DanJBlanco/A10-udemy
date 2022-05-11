import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// Router
import { AppRouterModule } from './app-router.module';

// Custom Moduls
import { SharedModule } from './shared/shared.module';
import { SellsModule } from './sells/sells.module';

// Changue locale
import localEs from '@angular/common/locales/es-PE';
import localFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localEs);
registerLocaleData(localFr);


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
  providers: [
    { provide: LOCALE_ID, useValue: 'es-PE'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
