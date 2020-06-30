import { Component, OnInit } from '@angular/core';
import { chart, SeriesOptionsType, defaultOptions } from 'highcharts';
@Component({
  selector: 'app-group-bar-chart',
  templateUrl: './group-bar-chart.component.html',
  styleUrls: ['./group-bar-chart.component.css']
})
export class GroupBarChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    chart('group-bar-chart', {
      chart: {
        type: 'bar'
      },
      xAxis: {
        maxPadding:0,
        categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
        title: {
          text: null
        }
      },
      yAxis: {
        gridLineWidth:0,
        maxPadding:0,
        min: 0,
        title: {
          text: 'Population (millions)',
          align: 'high'
        },
      },
      plotOptions: {
        bar:{
          animation: {
            duration: 6000
          },
        },
        series: {
          animation: {
            // duration: 6000
          },
          dataLabels: {
            useHTML:true,
            align: "right",
            enabled: true,
            style: {
              fontSize: "7px"
            },
          },
        }
      },
      legend: {
        verticalAlign: 'top',
        borderWidth: 1,
        backgroundColor:
          defaultOptions.legend.backgroundColor || '#FFFFFF',
        shadow: true
      },
      credits: {
        enabled: false
      },
      series: [{
        type: 'column',
        groupPadding:0,
        pointPadding:0,
        name: 'Year 1800',
        data: [100,100,100,100]
      }, {
        type: 'column',
        name: 'Year 1900',
        groupPadding:0,
        pointPadding:0,
        data: [100,100,100,100]
      }, {
        type: 'column',
        name: 'Year 2000',
        groupPadding:0,
        pointPadding:0,
        data: [100,100,100,100]
      }, {
        type: 'column',
        name: 'Year 2016',
        groupPadding:0,
        pointPadding:0,
        data: [100,120,100,100]
      }]
    }, () => { });
  }

}
