import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountrySelectorComponent } from './pages/country-selector/country-selector.component';

const routes: Routes = [{
  path: '',
  children: [
    { path: 'selector', component: CountrySelectorComponent },
    { path: '**', redirectTo: 'selector' }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class CountriesRoutingModule { }
