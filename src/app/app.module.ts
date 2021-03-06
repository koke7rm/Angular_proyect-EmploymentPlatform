import { ComponentsModule } from './components/components.module';
import { LoginService } from './services/login.service';
import { OfertasService } from './services/ofertas.service';
import { PagesModule } from './pages/pages.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    HttpClientModule,
    ComponentsModule
  ],
  providers: [OfertasService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
