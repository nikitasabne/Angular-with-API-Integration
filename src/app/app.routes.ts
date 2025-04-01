import { Routes } from '@angular/router';
import { UserComponent } from './Component/user/user.component';
import { AdminComponent } from './Component/admin/admin.component';
import { DataBindingComponent } from './Component/data-binding/data-binding.component';
import { ControlFlowComponent } from './Component/control-flow/control-flow.component';
import { CreateUserComponent } from './Component/create-user/create-user.component';
import { RegionComponent } from './Component/region/region.component';

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
    path: 'create-user',
    component: CreateUserComponent,
  },
  {
    path: 'region',
    component: RegionComponent,
  },
];
