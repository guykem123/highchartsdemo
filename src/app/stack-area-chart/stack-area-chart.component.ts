import { Component, OnInit } from '@angular/core';
import { chart, SeriesOptionsType } from 'highcharts';

@Component({
  selector: 'app-stack-area-chart',
  templateUrl: './stack-area-chart.component.html',
  styleUrls: ['./stack-area-chart.component.css']
})
export class StackAreaChartComponent implements OnInit {

  series: Array<SeriesOptionsType> = [
    {
      type: 'area',
      name: 'Italy1',
      data: [
        100000, 200000, 300000, 400000, 500000
      ]
    },
    {
      type: 'area',
      name: 'Dutch1',
      data: [
        10000, 20000, 30000, 40000, 50000
      ]
    },
    {
      type: 'area',
      name: 'Germany1',
      data: [
        1000, 2000, 3000, 4000, 5000
      ]
    },
    {
      type: 'area',
      name: 'Israel1',
      data: [
        100, 200, 300, 400, 500
      ]
    },
    {
      type: 'area',
      name: 'USA1',
      data: [
        10, 20, 30, 40, 50
      ]
    }, {
      type: 'area',
      name: 'USSR/Russia1',
      data: [1, 2, 3, 4, 5,
      ]
    },
    {
      type: 'area',
      name: 'Italy',
      data: [
        100000, 200000, 300000, 400000, 500000
      ]
    },
    {
      type: 'area',
      name: 'Dutch',
      data: [
        10000, 20000, 30000, 40000, 50000
      ]
    },
    {
      type: 'area',
      name: 'Germany',
      data: [
        1000, 2000, 3000, 4000, 5000
      ]
    },
    {
      type: 'area',
      name: 'Israel',
      data: [
        100, 200, 300, 400, 500
      ]
    },
    {
      type: 'area',
      name: 'USA',
      data: [
        10, 20, 30, 40, 50
      ]
    }, {
      type: 'area',
      name: 'USSR/Russia',
      data: [1, 2, 3, 4, 5,
      ]
    }
  ]
  constructor() { }

  ngOnInit(): void {
    chart('container',
      {
        legend: {
          useHTML:true,
          padding:10,
          verticalAlign: 'top',
          maxHeight:50,
      },
        chart: {
          type: 'area'
        },
        series: this.series
      },
      () => { });
  }

}
