import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/service/app.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  id: String;
  tituloPelicula: String;
  sinopsis: String;
  director: String;
  fechaEstreno: String;
  genero: String;
  imagenPelicula: String;

  constructor(private rutaActiva: ActivatedRoute,private service: AppService) { }

  ngOnInit() {
    this.rutaActiva.params.subscribe(params =>
      this.id = params.id
    );

    this.obtenerRegistro(this.id);
  }

  obtenerRegistro(id: String){
    this.service.obtenerDato(id).subscribe(data=>{
      this.tituloPelicula = data.nombre_pelicula;
      this.sinopsis = data.sinopsis;
      this.director = data.director;
      this.fechaEstreno = data.fecha_estreno;
      this.genero = data.genero;
      this.imagenPelicula = data.img_pelicula;
    })
  }

}
