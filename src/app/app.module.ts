
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { MegaMenuComponent } from './components/mega-menu/mega-menu.component';
import { SliderComponent } from './components/slider/slider.component';
import { MainTopComponent } from './components/main-top/main-top.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotfoundComponent } from './routes/notfound/notfound.component';
import { AdminPanelComponent } from './routes/admin-panel/admin-panel.component';
import { AppRoutingModule } from './app-routing.module';
import { PageAsliComponent } from './components/page-asli/page-asli.component';


@NgModule({
  declarations: [
    AppComponent,
    MegaMenuComponent,
    SliderComponent,
    MainTopComponent,
    MainComponent,
    FooterComponent,
    NotfoundComponent,
    AdminPanelComponent,
    PageAsliComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor() {}
 }
