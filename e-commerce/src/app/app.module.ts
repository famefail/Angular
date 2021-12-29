import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BoxComponent } from './box/box.component';
import { StaticComponent } from './static/static.component';
import { OrderComponent } from './order/order.component';
import { StartComponent } from './start/start.component';
import { ColComponent } from './col/col.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BoxComponent,
    StaticComponent,
    OrderComponent,
    StartComponent,
    ColComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
