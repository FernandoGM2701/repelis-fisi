import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/service/app.service';
import { Pelicula } from 'src/app/Modelo/Pelicula';
import swal from 'sweetalert2';

@Component({
  selector: 'app-central-pelicula',
  templateUrl: './central-pelicula.component.html',
  styleUrls: ['./central-pelicula.component.css']
})
export class CentralPeliculaComponent implements OnInit {

  peliculas: Array<Pelicula>;

  constructor(private service: AppService) {}

  ngOnInit() {
    this.obtenerRegistros();
  }

  eliminarPelicula(id: String){
    this.service.eliminar(id).subscribe(data=>{
      var encontrado = false;
      var i=0;

      while(i<this.peliculas.length && !encontrado){
        if(this.peliculas[i]._id == id){
          encontrado = true;
        }else{
          i++;
        }
      }

      if(encontrado){
        this.peliculas.splice(i, 1);

        swal.fire({
          icon: 'success',
          title: 'Confirmación',
          text: 'La eliminación de la película fue exitoso'
        });
      }else{
        swal.fire({
          icon: 'warning',
          title: 'Advertencia',
          text: 'Hubo un error al eliminar el registro'
        });
      }
    })
  }

  obtenerRegistros(){
    this.peliculas  = new Array<Pelicula>();

    this.service.obtenerDatos().subscribe(data =>{
      for(var i=0;i<data.length;i++){
        var pelicula = new Pelicula();
        pelicula._id = data[i]._id;
        pelicula.nombre_pelicula = data[i].nombre_pelicula;
        pelicula.img_pelicula = data[i].img_pelicula;
        pelicula.sinopsis = data[i].sinopsis;
        pelicula.director = data[i].director;
        pelicula.fecha_estreno = data[i].fecha_estreno;
        pelicula.genero = data[i].genero;

        this.peliculas.push(pelicula);
      }
    })
  }

}
