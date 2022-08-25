import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType, Color, ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-donuts',
  templateUrl: './donuts.component.html',
  styles: [
  ]
})
export class DonutsComponent implements OnInit {
  
  color: string[]= ['#F84ADA','#AA55F0','#4B4AF8'];
  public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ 350, 450, 100 ], backgroundColor: this.color, hoverBackgroundColor: this.color},
      { data: [ 50, 150, 120 ], backgroundColor: this.color, hoverBackgroundColor: this.color},
      { data: [ 250, 130, 70 ], backgroundColor: this.color, hoverBackgroundColor: this.color}
    ]
  };

  public chartsOption: ChartConfiguration['options'] = {
    responsive: true,
  };
  public doughnutChartType: ChartType = 'doughnut';
  
  constructor() { }

  ngOnInit(): void {
  }

}
