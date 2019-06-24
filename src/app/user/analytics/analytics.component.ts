import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

interface DemoData {
  name: any;
  data: any;
}

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent implements OnInit {
  trafficVSsales = new Chart({
    chart: {
      type: 'bar',
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
      categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15']
    },
    yAxis: {
      min: 0,
      title: {
        text: ''
      },
      categories: ['0', '300', '600', '900', '1200', '1500']
    },
    plotOptions: {
      column: {
        pointPadding: 0,
        borderWidth: 0,
        groupPadding: 0,
        shadow: false
      }
    },
    series: [
      {
        name: 'Orders',
        data: [300, 400, 500, 600],
        type: 'bar'
      },
      {
        name: 'New Registration',
        data: [400, 450, 500, 700],
        type: 'bar'
      }
    ]
  });


  trafficVSsales1 = new Chart({
    chart: {
      type: 'column',
      width: '800'
    },
    title: {
      text: ''
    },
    subtitle: {
      text: ''
    },
    xAxis: {
      categories: [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15'
      ],
      crosshair: true
    },
    yAxis: {
      min: 0,
      title: {
        text: ''
      }
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.f}</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
    },
    plotOptions: {
      column: {
        pointPadding: 0,
        borderWidth: 0
      }
    },
    series: [{
      name: 'Offline',
      data: [100, 200, 300, 325, 340, 350, 360, 370, 380, 390, 410, 430, 200, 245, 300],
      type: 'column',

    }, {
      name: 'Online',
      data: [200, 210, 215, 220, 230, 235, 240, 250, 260, 270, 280, 290, 300, 310, 330],
      type: 'column'

    }]
  });

  //Ssession chart
  sessionChart = new Chart({
    chart: {
      type: 'spline',
      width: '800',
      scrollablePlotArea: {
        minWidth: 800,
        scrollPositionX: 1
      }
    },
    title: {
      text: '',
      align: 'left'
    },
    subtitle: {
      text: '',
      align: 'left'
    },
    xAxis: {
      //type: 'datetime',
      labels: {
        overflow: 'justify'
      },
      categories: [
        '30',
        '60',
        '90',
        '120',
        '150'
      ],
    },
    yAxis: {
      min: 0,
      title: {
        text: ''
      },
      minorGridLineWidth: 0,
      gridLineWidth: 0,
      alternateGridColor: null,
      // plotBands: [{ // Light air
      //     from: 0.3,
      //     to: 1.5,
      //     color: 'rgba(68, 170, 213, 0.1)',
      //     label: {
      //         text: 'Light air',
      //         style: {
      //             color: '#606060'
      //         }
      //     }
      // }, { // Light breeze
      //     from: 1.5,
      //     to: 3.3,
      //     color: 'rgba(0, 0, 0, 0)',
      //     label: {
      //         text: 'Light breeze',
      //         style: {
      //             color: '#606060'
      //         }
      //     }
      // }, { // Gentle breeze
      //     from: 3.3,
      //     to: 5.5,
      //     color: 'rgba(68, 170, 213, 0.1)',
      //     label: {
      //         text: 'Gentle breeze',
      //         style: {
      //             color: '#606060'
      //         }
      //     }
      // }, { // Moderate breeze
      //     from: 5.5,
      //     to: 8,
      //     color: 'rgba(0, 0, 0, 0)',
      //     label: {
      //         text: 'Moderate breeze',
      //         style: {
      //             color: '#606060'
      //         }
      //     }
      // }, { // Fresh breeze
      //     from: 8,
      //     to: 11,
      //     color: 'rgba(68, 170, 213, 0.1)',
      //     label: {
      //         text: 'Fresh breeze',
      //         style: {
      //             color: '#606060'
      //         }
      //     }
      // }, { // Strong breeze
      //     from: 11,
      //     to: 14,
      //     color: 'rgba(0, 0, 0, 0)',
      //     label: {
      //         text: 'Strong breeze',
      //         style: {
      //             color: '#606060'
      //         }
      //     }
      // }, { // High wind
      //     from: 14,
      //     to: 15,
      //     color: 'rgba(68, 170, 213, 0.1)',
      //     label: {
      //         text: 'High wind',
      //         style: {
      //             color: '#606060'
      //         }
      //     }
      // }]
    },
    tooltip: {
      valueSuffix: ' '
    },
    plotOptions: {
      spline: {
        lineWidth: 4,
        states: {
          hover: {
            lineWidth: 5
          }
        },
        marker: {
          enabled: false
        },
        //pointInterval: 3600000, // one hour
        //pointStart: Date.UTC(2018, 1, 13, 0, 0, 0)
      }
    },
    series: [{
      name: 'User',
      data: [
        150, 120, 90, 80, 60, 90, 70, 80, 130, 120, 100, 140,
        150, 80, 70, 60, 50, 60
      ],
      type: 'spline'

    },],
    navigation: {
      menuItemStyle: {
        fontSize: '10px'
      }
    }
  });
  //Session chart

  //TRAFFIC RESOURCES
  traffic_resources = new Chart({
    chart: {
      type: 'pie',
      //width:400,
      options3d: {
        enabled: true,
        alpha: 45
      }
    },
    title: {
      text: ''
    },
    subtitle: {
      text: ''
    },
    plotOptions: {
      pie: {
        innerSize: 100,
        depth: 45,
       // allowPointSelect: false,
       // cursor: 'pointer',
        dataLabels: {
          enabled: false,
        }
      },
      series: {
        dataLabels: {
            enabled: true,
            formatter: function() {
                return Math.round(this.percentage*100)/100 + ' %';
            },
            //distance: -30,
            color:'white'
        }
    }
    },
    series: [{
      name: ' ',
      data: [
        ['Social', 20],
        ['Search Eng', 30],
        ['Direct', 50]
      ],
      type: 'pie'
    }]
  });
  //TRAFFIC RESOURCES


  constructor() { }

  ngOnInit() {
    // this.trafficVSsales.addPoint(Math.floor(Math.random() * 10));
  }

}
