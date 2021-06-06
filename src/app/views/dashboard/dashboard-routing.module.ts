import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { Userusage } from './userusage.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Dashboard'
    },
	children: [
	  {
        path: 'dashboard',
        component: DashboardComponent,
        data: {
          title: 'Dashboard'
        }
      },
	  {
        path: 'userusage',
        component: Userusage,
        data: {
          title: 'User Usage'
        }
      }
	 ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
