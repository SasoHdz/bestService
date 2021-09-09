import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { LayoutServicioComponent } from './layout-servicio/layout-servicio.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'servicio',
    component: LayoutServicioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
