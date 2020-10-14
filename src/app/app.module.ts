import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MainComponent } from './main/main.component';
import { ImagenPresentacionComponent } from './imagen-presentacion/imagen-presentacion.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { CardServiciosComponent } from './card-servicios/card-servicios.component';
import { CategorizacionComponent } from './categorizacion/categorizacion.component';
import { CategorizacionCardComponent } from './categorizacion-card/categorizacion-card.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MainComponent,
    ImagenPresentacionComponent,
    ServiciosComponent,
    CardServiciosComponent,
    CategorizacionComponent,
    CategorizacionCardComponent,
    NosotrosComponent,
    ContactoComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
