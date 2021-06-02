import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user_list.component';
import { NavbarsComponent } from './navbars/navbars.component';
import { UserCreateFormComponent } from './usercreateforms.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'User'
    },
    children: [
      {
        path: '',
        redirectTo: 'user_list'
      },
      {
        path: 'user_list',
        component: UserListComponent,
        data: {
          title: 'List User'
        }
      },
      {
        path: 'create_user_form',
        component: UserCreateFormComponent,
        data: {
          title: 'Create User'
        }
      }  	  
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}