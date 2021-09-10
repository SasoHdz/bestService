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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingComponent,
    LayoutServicioComponent,
    ServicioButtonComponent,
    SearchComponent,
    LayoutSelectServiceComponent
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
