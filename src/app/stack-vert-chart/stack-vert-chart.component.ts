import { Component, OnInit } from '@angular/core';
import { chart, SeriesOptionsType, defaultOptions } from 'highcharts';

@Component({
  selector: 'app-stack-vert-chart',
  templateUrl: './stack-vert-chart.component.html',
  styleUrls: ['./stack-vert-chart.component.css']
})
export class StackVertChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    chart('vert-bar-chart', {
      chart: {
        type: 'column'
      },
      title:{
        useHTML:true,
        style:{
          // height:0,
        },
      },
      xAxis:{
        gridLineWidth:0,
        maxPadding:0,
        showEmpty:false,
        visible:false
      },
      yAxis:{
        gridLineWidth:0,
        maxPadding:0,
        showEmpty:false,
        visible:false
      },
      legend:{
        enabled:false
      },
      series: [{
        type: 'column',
        groupPadding:0,
        pointPadding:0,
        name: 'John',
        data: [5, 3, 4, 7, 2]
      }, {
        type: 'column',
        groupPadding:0,
        pointPadding:0,
        name: 'Jane',
        data: [2, 2, 3, 2, 1]
      }, {
        type: 'column',
        groupPadding:0,
        name: 'Joe',
        data: [3, 4, 4, 2, 5]
      }]
    },()=>{});
  }

}
