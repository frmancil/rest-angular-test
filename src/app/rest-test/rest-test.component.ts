import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-rest-test',
  templateUrl: './rest-test.component.html',
  styleUrl: './rest-test.component.css'
})
export class RestTestComponent implements OnInit {
  data: any;

  constructor(private restService: RestService) {}

  ngOnInit() {
    this.restService.getData().subscribe(response => {
      this.data = response;
      console.log(this.data);
    });
  }

}
