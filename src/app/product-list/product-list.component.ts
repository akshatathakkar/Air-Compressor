import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  name = 'Angular 5';
  constructor() { }

  labels = ['match1', 'match2', 'match3', 'match4', 'match5'];
  datasets = [
    {
      label: 'TeamA Score',
      data: [10, 50, 25, 70, 80],
      backgroundColor: 'blue',
      borderColor: 'lightblue',
      fill: false,
      lineTension: 0,
      radius: 5,
    },
    {
      label: 'TeamB Score',
      data: [20, 35, 40, 60, 50],
      backgroundColor: 'green',
      borderColor: 'lightgreen',
      fill: false,
      lineTension: 0,
      radius: 5,
    },
  ]
  barChartOptions = {
    legend: { position: 'bottom' },
    scales: {
      xAxes: [{ stacked: true }],
      yAxes: [{
        ticks: {
          beginAtZero: true,
        }
      }]
    }
  };

  ngOnInit(): void {
    var xValues = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
    new Chart("myChart", {
      type: "line",
      data: {
        labels: xValues,
        datasets: [{
          data: [860, 1140, 1060, 1060, 1070, 1110, 1330, 2210, 7830, 2478],
          fill: false
        }, {
          data: [1600, 1700, 1700, 1900, 2000, 2700, 4000, 5000, 6000, 2000],
          fill: false
        }, {
          data: [300, 700, 2000, 5000, 2000, 4000, 2000, 1000, 200, 100],
          fill: false
        },
        ]
      },

    });
  }



}
