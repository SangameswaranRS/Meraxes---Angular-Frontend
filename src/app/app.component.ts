import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes,Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  router:any;
  currentUser: any;
  httpClient: any;
  title = 'app';
  constructor(router: Router,httpClient:HttpClient){
    this.currentUser = 'anonymous';
    this.router = router;
    this.httpClient = httpClient;
    this.httpClient.get('http://localhost:3000/api/system/ping').toPromise().then(
      success =>{
        console.log(success);
        this.currentUser = success.participant;
      },
      error => {
        alert('Something went wrong');
      }
    );
  }
  ngOnInit() {
  }
  navigateAssetTransfer(){
    this.router.navigate(['asset-transfer']);
  }
  navigateMoneyTransfer(){
    this.router.navigate(['money-transfer']);
  }
  navigateAssetView(){
    this.router.navigate(['asset-view']);
  }
  navigateParticipantView(){
    this.router.navigate(['participant-view']);
  }
}
