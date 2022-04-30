import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ByCountryComponent } from './pais/pages/by-country/by-country.component';
import { ByRegionComponent } from './pais/pages/by-region/by-region.component';
import { ByCapitalComponent } from './pais/pages/by-capital/by-capital.component';
import { CountryComponent } from './pais/pages/country/country.component';

const routes: Routes = [
  {
    path: '',
    component: ByCountryComponent,
    pathMatch: 'full'
  },
  {
    path: 'region',
    component: ByRegionComponent
  },
  {
    path: 'capital',
    component: ByCapitalComponent
  },
  {
    path: 'pais/:id',
    component: CountryComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
]

@NgModule({

  imports:[
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
