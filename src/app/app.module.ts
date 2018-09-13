import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ParticipantViewComponent } from './participant-view/participant-view.component';
import { AssetViewComponent } from './asset-view/asset-view.component';
import { AssetTransferComponent } from './asset-transfer/asset-transfer.component';
import { MoneyTransferComponent } from './money-transfer/money-transfer.component';
import { HistorianComponent } from './historian/historian.component';

@NgModule({
  declarations: [
    AppComponent,
    ParticipantViewComponent,
    AssetViewComponent,
    AssetTransferComponent,
    MoneyTransferComponent,
    HistorianComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
