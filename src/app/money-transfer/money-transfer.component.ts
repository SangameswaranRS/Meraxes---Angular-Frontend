import { Component, OnInit } from '@angular/core';
import {HttpHeaders,HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-money-transfer',
  templateUrl: './money-transfer.component.html',
  styleUrls: ['./money-transfer.component.scss']
})
export class MoneyTransferComponent implements OnInit {
  class = 'org.example.trading.MoneyTransfer';
  amountToBeTransferred: any;
  transferInitTrader: any;
  beneficiaryTrader: any;
  http: any;
  constructor(http: HttpClient) { 
    this.http = http;
  }

  ngOnInit() {
  }

  initTxn(){
    var headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    var options =  {
        headers: headers
    };
    let postParams ={
      $class: this.class,
      amountToBeTransferred:this.amountToBeTransferred,
      transferInitTrader: this.transferInitTrader,
      beneficiaryTrader: this.beneficiaryTrader
    };
    console.log(postParams);
    this.http.post("http://localhost:3000/api/org.example.trading.MoneyTransfer",postParams,options).toPromise().then(
      success => {
        console.log(success);
        alert('Txn Initiated');
      },
      error => {
        alert('Txn Failed');
        console.log(error);
      }
    );
  }
}
