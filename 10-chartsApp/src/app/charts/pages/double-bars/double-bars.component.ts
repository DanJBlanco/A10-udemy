import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartType, ChartData, ChartDataset } from 'chart.js';

@Component({
  selector: 'app-double-bars',
  templateUrl: './double-bars.component.html',
  styles: [
  ]
})
export class DoubleBarsComponent {
  
  supliersLabels: string[] = [ '2006', '2007', '2008', '2009', '2010' ];

  public supliersData: ChartDataset<'bar'>[]= [
      { data: [ 100,200,300,400,500 ], label: 'Seller A' , backgroundColor:'#F8947C'},
      { data: [ 50,250,30,450,200 ], label: 'Seller B' , backgroundColor:'#F0B984'}
    ];

  public productData: ChartDataset<'bar'>[]= [
      { data: [ 200,300,400,300,100], label: 'Cars'},
    ];



}
