import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { LayoutServicioComponent } from './layout-servicio/layout-servicio.component';
import { LayoutSelectServiceComponent } from './layout-select-service/layout-select-service.component';
import { LayoutInfoUserComponent} from './layout-info-user/layout-info-user.component';
import { LayoutDetailsUserComponent } from './layout-details-user/layout-details-user.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'servicio',
    component: LayoutServicioComponent
  },
  {
    path: 'select-servicio',
    component: LayoutSelectServiceComponent
  },
  {
    path: 'info-user',
    component: LayoutInfoUserComponent
  },
  {
    path: 'details-user',
    component: LayoutDetailsUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
