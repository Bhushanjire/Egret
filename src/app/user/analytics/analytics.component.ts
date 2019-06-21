import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

interface DemoData{
  name : any;
  data : any;
}

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent implements OnInit {

  
  chart = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Linechart'
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Line 1',
        data: [1, 2, 3],
        type :'line'
      },{
        name: 'Line 2',
        data: [1, 2, 3],
        type :'bar'
      },
      {
        name: 'Line 2',
        data: [1, 2, 3],
        type :'pie'
      }
    ]
  });

  
  constructor() { }

  ngOnInit() {
    this.chart.addPoint(Math.floor(Math.random() * 10));
  }

}
