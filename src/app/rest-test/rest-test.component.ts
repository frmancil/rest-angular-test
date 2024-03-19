import { Component, OnInit, AfterViewInit } from '@angular/core';
import { RestService } from '../rest.service';

import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';

@Component({
  selector: 'app-rest-test',
  standalone: true,
  imports: [CanvasJSAngularChartsModule],
  templateUrl: './rest-test.component.html',
  styleUrl: './rest-test.component.css'
})
export class RestTestComponent implements OnInit {
  data: any;
  dataPoints: any = [];
  chart:any;

  constructor(private restService: RestService) { }

  getChartInstance(chart: object) {
    this.chart = chart;
  }

  chartOptions = {
    theme: "light2",
    zoomEnabled: true,
    exportEnabled: true,
    title: {
      text:"Example"
    },
    axisY: {
      title: "Budget",
      prefix: "$"
    },
    data: [{
      type: "line",
      name: "Example",
      yValueFormatString: "$#,###.00",
      xValueType: "dateTime",
      dataPoints: this.dataPoints
    }]
  }

  ngOnInit() {
    this.restService.getData().subscribe(response => {
      let data = response;

      for (let i = 0; i < data.length; i++) {
        this.dataPoints.push({x: new Date(data[i].date), y: Number(data[i].available_balance)})
      }
    });
    this.chart.subtitles[0].remove();
  }

}
