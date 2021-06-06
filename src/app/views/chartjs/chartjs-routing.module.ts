import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChartJSComponent } from './chartjs.component';
import { BarchartComponent } from './barchart.component';
import { DoughnutComponent } from './doughnut.component';
import { RadarchartComponent } from './radarchart.component';
import { PiechartComponent } from './piechart.component';
import { PolarchartComponent } from './polarchart.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Chart'
    },
	children: [
	  {
        path: 'linechart',
        component: ChartJSComponent,
        data: {
          title: 'Line Chart'
        }
      } ,
      {
        path: 'barchart',
        component: BarchartComponent,
        data: {
          title: 'Bar Chart'
        }
      },
	  {
        path: 'doughnutchart',
        component: DoughnutComponent,
        data: {
          title: 'Doughnut Chart'
        }
      },
	  {
        path: 'radarchart',
        component: RadarchartComponent,
        data: {
          title: 'Doughnut Chart'
        }
      },
	  {
        path: 'piechart',
        component: PiechartComponent,
        data: {
          title: 'Pie Chart'
        }
      },
	  {
        path: 'polarchart',
        component: PolarchartComponent,
        data: {
          title: 'Polar Chart'
        }
      }
	  
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartJSRoutingModule {}
