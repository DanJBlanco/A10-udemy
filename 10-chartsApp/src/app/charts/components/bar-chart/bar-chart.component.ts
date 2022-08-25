import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartType, ChartData, ChartDataset } from 'chart.js';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styles: [
  ]
})
export class BarChartComponent implements OnInit {

  
  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    indexAxis: 'x',
  };
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  @Input() horizontal: boolean = false;

  @Input() barChartLabels: string[] = [ 
    // '2006', '2007', '2008', '2009', '2010' 
  ];
  
  @Input() barChartDataSet: ChartDataset<'bar'>[]= [];

  public barChartData: ChartData<'bar'> | undefined;
      // { data: [ 100,200,300,400,500 ], label: 'Seller A' , backgroundColor:'#F8947C'},
      // { data: [ 50,250,30,450,200 ], label: 'Seller B' , backgroundColor:'#F0B984'}


  constructor() {    
  }

  ngOnInit(): void {    
    if(this.horizontal){
      this.barChartOptions!.indexAxis='y';
      
    }

    this.barChartData= {
      labels: this.barChartLabels,
      datasets: this.barChartDataSet
    };
  }

}
