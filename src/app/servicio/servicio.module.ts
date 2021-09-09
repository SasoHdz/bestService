import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutServicioComponent } from './pages/layout-servicio/layout-servicio.component';
import { ButtonIconoComponent } from './components/button-icono/button-icono.component';
import { HeaderComponent } from '../header/header.component';



@NgModule({
  declarations: [
    LayoutServicioComponent,
    ButtonIconoComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ServicioModule { }
