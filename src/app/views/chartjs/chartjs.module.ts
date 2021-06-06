import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { ChartJSComponent } from './chartjs.component';
import { BarchartComponent } from './barchart.component';
import { DoughnutComponent } from './doughnut.component';
import { RadarchartComponent } from './radarchart.component';
import { PiechartComponent } from './piechart.component';
import { PolarchartComponent } from './polarchart.component';

import { ChartJSRoutingModule } from './chartjs-routing.module';

@NgModule({
  imports: [
    ChartJSRoutingModule,
    ChartsModule
  ],
  declarations: [ ChartJSComponent,BarchartComponent,DoughnutComponent,RadarchartComponent,PiechartComponent,PolarchartComponent ]
})
export class ChartJSModule { }
