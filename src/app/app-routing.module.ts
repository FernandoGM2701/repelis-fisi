import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditarPeliculaComponent } from './Componentes/cartelera/editar-pelicula/editar-pelicula.component';
import { CentralPeliculaComponent } from './Componentes/cartelera/central-pelicula/central-pelicula.component';
import { PrincipalComponent } from './Componentes/cartelera/principal/principal.component';
import { AgregarPeliculaComponent } from './Componentes/cartelera/agregar-pelicula/agregar-pelicula.component';


const routes: Routes = [
  {path: 'editar-pelicula/:id', component: EditarPeliculaComponent},
  {path: 'central-pelicula', component: CentralPeliculaComponent},
  {path: '', component:CentralPeliculaComponent},
  {path: 'ver-pelicula/:id', component: PrincipalComponent},
  {path: 'agregar-pelicula', component: AgregarPeliculaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
