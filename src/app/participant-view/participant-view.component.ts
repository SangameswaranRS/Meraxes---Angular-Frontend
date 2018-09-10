import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'; 

@Component({
  selector: 'app-participant-view',
  templateUrl: './participant-view.component.html',
  styleUrls: ['./participant-view.component.scss']
})
export class ParticipantViewComponent implements OnInit {

  httpClient: any;
  successResponse: any;
  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
    this.httpClient.get('http://localhost:3000/api/org.example.trading.Trader').toPromise().then(
      success => {
        this.successResponse = success;
      },
      error=>{
        alert(error.json);
        this.successResponse =[];
      }
    );
   }

  ngOnInit() {
  }

}
