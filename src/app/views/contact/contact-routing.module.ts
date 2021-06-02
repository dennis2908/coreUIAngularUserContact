import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactCreateFormComponent } from './contactcreateforms.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Contact'
    },
    children: [
      {
        path: '',
        redirectTo: 'user_list'
      },
      {
        path: 'create_contact_form',
        component: ContactCreateFormComponent,
        data: {
          title: 'Create Contact Form'
        }
      }     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule {}