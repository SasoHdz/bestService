import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LandingComponent } from './landing/landing.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutServicioComponent } from './layout-servicio/layout-servicio.component';
import { ServicioButtonComponent } from './servicio-button/servicio-button.component';
import { SearchComponent } from './search/search.component';
import { LayoutSelectServiceComponent } from './layout-select-service/layout-select-service.component';
import { InfoUserComponent } from './info-user/info-user.component';
import { LayoutInfoUserComponent } from './layout-info-user/layout-info-user.component';
import { DetailsUserComponent } from './details-user/details-user.component';
import { TerminosUserComponent } from './terminos-user/terminos-user.component';
import { LayoutDetailsUserComponent } from './layout-details-user/layout-details-user.component';
import { LayoutTerminosUserComponent } from './layout-terminos-user/layout-terminos-user.component';
import { FechasUserComponent } from './fechas-user/fechas-user.component';
import { CalendarioUserComponent } from './calendario-user/calendario-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingComponent,
    LayoutServicioComponent,
    ServicioButtonComponent,
    SearchComponent,
    LayoutSelectServiceComponent,
    InfoUserComponent,
    LayoutInfoUserComponent,
    DetailsUserComponent,
    TerminosUserComponent,
    LayoutDetailsUserComponent,
    LayoutTerminosUserComponent,
    FechasUserComponent,
    CalendarioUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
