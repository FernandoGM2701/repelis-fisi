import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './Cabecera/navbar/navbar.component';
import { FooterComponent } from './Cabecera/footer/footer.component';
import { AgregarPeliculaComponent } from './Componentes/cartelera/agregar-pelicula/agregar-pelicula.component';
import { CentralPeliculaComponent } from './Componentes/cartelera/central-pelicula/central-pelicula.component';
import { EditarPeliculaComponent } from './Componentes/cartelera/editar-pelicula/editar-pelicula.component';
import { PrincipalComponent } from './Componentes/cartelera/principal/principal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AgregarPeliculaComponent,
    CentralPeliculaComponent,
    EditarPeliculaComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
