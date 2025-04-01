import { Routes } from '@angular/router';
import { UserComponent } from './Component/user/user.component';
import { AdminComponent } from './Component/admin/admin.component';
import { DataBindingComponent } from './Component/data-binding/data-binding.component';
import { ControlFlowComponent } from './Component/control-flow/control-flow.component';
import { GetAPIComponent } from './Component/get-api/get-api.component';
import { CreateUserComponent } from './Component/create-user/create-user.component';

export const routes: Routes = [
  {
    path: 'user-page',
    component: UserComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
  },
  {
    path: 'data-binding',
    component: DataBindingComponent,
  },
  {
    path: 'control-flow',
    component: ControlFlowComponent,
  },
  {
    path: 'get-api',
    component: GetAPIComponent,
  },
  {
    path: 'create-user',
    component: CreateUserComponent,
  },
];
