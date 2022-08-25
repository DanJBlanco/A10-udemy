import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarsComponent } from './pages/bars/bars.component';
import { DoubleBarsComponent } from './pages/double-bars/double-bars.component';
import { DonutsComponent } from './pages/donuts/donuts.component';
import { DonutsHttpComponent } from './pages/donuts-http/donuts-http.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path:'bars', component:BarsComponent
      },
      {
        path:'double-bars', component:DoubleBarsComponent
      },
      {
        path:'donut', component: DonutsComponent
      },
      {
        path:'http-donut', component:DonutsHttpComponent
      },
      {
        path: '**', redirectTo: 'bars'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartsRoutingModule { }
