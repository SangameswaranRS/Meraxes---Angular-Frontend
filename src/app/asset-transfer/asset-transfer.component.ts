import { Component, OnInit } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-asset-transfer',
  templateUrl: './asset-transfer.component.html',
  styleUrls: ['./asset-transfer.component.scss']
})
export class AssetTransferComponent implements OnInit {

  httpClient: any;
  class = 'org.example.trading.Trade';
  commodity: any;
  newOwner: any;
  constructor(http:HttpClient) {
    this.httpClient = http;
   }

  ngOnInit() {
  }

  initiateTxn(){
    console.log(this.commodity,this.newOwner);
    let postParams ={
      $class: this.class,
      commodity:this.commodity,
      newOwner: this.newOwner
    };
    var headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    var options =  {
        headers: headers
    };
    this.httpClient.post("http://localhost:3000/api/org.example.trading.Trade",postParams,options).toPromise().then(
      success => {
        console.log(success);
        alert('Txn Initiated');
      },error=> {
        alert('Error');
        console.log(error);
      }
    );
  }
}
