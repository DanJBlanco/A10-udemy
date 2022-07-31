import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CountrySelectorComponent } from './pages/country-selector/country-selector.component';
import { CountriesRoutingModule } from './countries-routing.module';


@NgModule({
  declarations: [
    CountrySelectorComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CountriesRoutingModule,
  ]
})
export class CountriesModule { }
