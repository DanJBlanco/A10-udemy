import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgChartsModule } from 'ng2-charts';

import { ChartsRoutingModule } from './charts-routing.module';
import { BarsComponent } from './pages/bars/bars.component';
import { DoubleBarsComponent } from './pages/double-bars/double-bars.component';
import { DonutsComponent } from './pages/donuts/donuts.component';
import { DonutsHttpComponent } from './pages/donuts-http/donuts-http.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';


@NgModule({
  declarations: [
    BarsComponent,
    DoubleBarsComponent,
    DonutsComponent,
    DonutsHttpComponent,
    BarChartComponent
  ],
  imports: [
    CommonModule,
    ChartsRoutingModule,
    NgChartsModule
  ]
})
export class ChartsModule { }
