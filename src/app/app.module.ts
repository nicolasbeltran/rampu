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
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ImagenPrincipalComponent } from './sobre-nosotros/imagen-principal/imagen-principal.component';
import { NuestroEquipoComponent } from './sobre-nosotros/nuestro-equipo/nuestro-equipo.component';
import { ContactarComponent } from './sobre-nosotros/contactar/contactar.component';
import { AppRoutingModule } from './app-routing.module';
import { MainSobreNosotrosComponent } from './sobre-nosotros/main-sobre-nosotros/main-sobre-nosotros.component';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

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
    ImagenPrincipalComponent,
    NuestroEquipoComponent,
    ContactarComponent,
    MainSobreNosotrosComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ScrollToModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
