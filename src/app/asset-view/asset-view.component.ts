import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-asset-view',
  templateUrl: './asset-view.component.html',
  styleUrls: ['./asset-view.component.scss']
})
export class AssetViewComponent implements OnInit {
  httpClient: any;
  successResponse: any;
  queryString =' Your Assets ->'
  constructor(http:HttpClient) {
    this.httpClient=http;
    this.httpClient.get('http://localhost:3000/api/org.example.trading.Commodity').toPromise().then(
      success => {
        console.log(success.length);
        if(success.length==0){
          this.queryString = 'You dont have any assets';
          this.successResponse =[];
        }
        this.successResponse=success;
      },error => {
        this.queryString = 'You dont have any assets';
        this.successResponse =[];
        alert('Something went wrong in recieving asset list');
      }
    );
  }

  ngOnInit() {
  }

}
