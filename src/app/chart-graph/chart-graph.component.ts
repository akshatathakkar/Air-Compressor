import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-chart-graph',
  templateUrl: './chart-graph.component.html',
  styleUrls: ['./chart-graph.component.scss']
})
export class ChartGraphComponent implements OnInit, AfterViewInit {
  @ViewChild('chartGraph') chartGraph?: ElementRef;
  chart: any;

  constructor() { }

  ngOnInit(): void {
    // this.chart = this.chartGraph
    // this.chart = (<HTMLInputElement>document.getElementById("chartGraph")).value

  }

  ngAfterViewInit() {
    // this.chart = (<HTMLInputElement>document.getElementById("chartGraph")).value
    this.chart = this.chartGraph
    Chart.register(...registerables)
    this.loadChart();
  }

  loadChart() {
    new Chart(this.chart, {
      type: 'line',
      data: {
        datasets: [{
          data: [20, 40, 30, 50, 45, 60, 20, 10],
          label: 'series1',
          backgroundColor: '#0000',
        }]
      }

    })
  }

}
