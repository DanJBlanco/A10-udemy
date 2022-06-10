import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountrySelectorComponent } from './pages/country-selector/country-selector.component';
import { CountriesRoutingModule } from './countries-routing.module';


@NgModule({
  declarations: [
    CountrySelectorComponent
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule
  ]
})
export class CountriesModule { }
