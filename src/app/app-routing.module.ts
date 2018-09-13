import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParticipantViewComponent } from './participant-view/participant-view.component';
import { AssetViewComponent } from './asset-view/asset-view.component';
import { AssetTransferComponent } from './asset-transfer/asset-transfer.component';
import { MoneyTransferComponent } from './money-transfer/money-transfer.component';
import { HistorianComponent } from './historian/historian.component';

const routes: Routes = [
  {
    path: 'participant-view',
    component: ParticipantViewComponent
  }, {
    path: 'asset-view',
    component: AssetViewComponent
  }, {
    path: 'asset-transfer',
    component: AssetTransferComponent
  }, {
    path: 'money-transfer',
    component: MoneyTransferComponent
  }, {
    path: 'historian',
    component: HistorianComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
