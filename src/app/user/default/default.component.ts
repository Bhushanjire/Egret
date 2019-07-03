import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})

export class DefaultComponent implements OnInit {
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
    //   xAxis: {
    //     type: 'datetime',
    //     tickPixelInterval:50

    // },
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yAxis: {
      title: {
        text: 'Orders / New user registrations'
      }
    },
    series: [
      {
        name: 'Orders',
        data: [
          ['Jan', 30],
          ['Feb', 5],
          ['Mar', 40],
          ['APR', 8],
          ['May', 70],
          ['Jun', 5],
          ['Jul', 50],
          ['Aug', 5],
          ['Sep', 30],
          ['Oct', 5],
          ['Nov', 90],
          ['Dec', 5]
        ],
        type: 'line'
      },
      {
        name: 'New Registration',
        data: [
          ['Jan', 5],
          ['Feb', 40],
          ['Mar', 5],
          ['APR', 30],
          ['May', 8],
          ['Jun', 90],
          ['Jul', 9],
          ['Aug', 60],
          ['Sep', 5],
          ['Oct', 30],
          ['Nov', 15],
          ['Dec', 45]
        ],
        type: 'line'
      }
    ]
  });

  spacechart = new Chart({
    chart: {
      type: 'pie'
    },
    title: {
      text: ''
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name:'',
        data: [
          ['Remaining', 300],
          ['Spent', 200]],
        type: 'pie'
      },
    ]
  });

  taskchart = new Chart({
    chart: {
      type: 'pie'
    },
    title: {
      text: ''
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name:'',
        data: [
          ['Remaining', 4],
          ['Spent', 8]],
        type: 'pie'
      },
    ]
  });

  ticketschart = new Chart({
    chart: {
      type: 'pie'
    },
    title: {
      text: ''
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name:'',
        data: [
          ['Remaining', 25],
          ['Spent', 15]],
        type: 'pie'
      },
    ]
  });

  stockchart = new Chart({
    chart: {
      type: 'pie'
    },
    title: {
      text: ''
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name:'',
        data: [
          ['Remaining', 400],
          ['Spent', 1600]],
        type: 'pie'
      },
    ]
  });



  recentTikets = [{
    "photo": 'profile.jpeg',
    "colData1": 'Mike Dake',
    "colData2": 'Excerpt pipe is used...',
    "colData3": '23 months ago',
    "status": 'Active'
  },
  {
    "photo": 'profile.jpeg',
    "colData1": 'Mike Dake',
    "colData2": 'Excerpt pipe is used...',
    "colData3": '23 months ago',
    "status": 'Active'
  },
  {
    "photo": 'profile.jpeg',
    "colData1": 'Mike Dake',
    "colData2": 'Excerpt pipe is used...',
    "colData3": '23 months ago',
    "status": 'Active'
  },
  {
    "photo": 'profile.jpeg',
    "colData1": 'Mike Dake',
    "colData2": 'Excerpt pipe is used...',
    "colData3": '23 months ago',
    "status": 'Active'
  }];

  topCompaign = [{
    "name": 'Facebook Campaign',
    "value": '40',
    "color": 'primary'
  },
  {
    "name": 'Google AdSense',
    "value": '30',
    "color": 'warn'
  },
  {
    "name": 'Twitter Campaign',
    "value": '70',
    "color": 'primary'
  },
  {
    "name": 'LinkedIn Campaign',
    "value": '50',
    "color": 'primary'
  }];

  data1 = [{
    "col1": 'Design Data Model',
    "col2": 'Morris Adams',
    "col3": 10
  },
  {
    "col1": 'Payment Module',
    "col2": 'Ada Kidd',
    "col3": 30
  },
  {
    "col1": 'Discount Module',
    "col2": 'Workman Floyd',
    "col3": 60
  },
  {
    "col1": 'Develop CR Algorithm',
    "col2": 'Jhone Doe',
    "col3": 80
  },
  {
    "col1": 'User Story',
    "col2": 'Watson Joyce',
    "col3": 90
  }];


  constructor() { }

  ngOnInit() {
    this.chart.addPoint(Math.floor(Math.random() * 20));
   // this.spacechart.addPoint(Math.floor(Math.random() * 20));
    //this.taskchart.addPoint(Math.floor(Math.random() * 20));
    //this.ticketschart.addPoint(Math.floor(Math.random() * 20));
   // this.stockchart.addPoint(Math.floor(Math.random() * 20));
  }


}
