import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-historian',
  templateUrl: './historian.component.html',
  styleUrls: ['./historian.component.scss']
})
export class HistorianComponent implements OnInit {
  httpClient: any;
  responseJson: any;
  constructor(http: HttpClient) {
    this.httpClient = http;
    this.httpClient.get('http://localhost:3000/api/system/historian').toPromise().then(
      success => {
          console.log(success);
          this.responseJson = success;
      },
      error => {
        console.log(error);
        alert('Error in fetching Historian Records');
      }
    );
  }

  ngOnInit() {
  }

}
