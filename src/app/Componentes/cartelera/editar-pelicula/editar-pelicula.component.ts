import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/service/app.service';

declare const $: any;

declare const convertToBase64Simple: any;

declare const getBase64Simple: any;

@Component({
  selector: 'app-editar-pelicula',
  templateUrl: './editar-pelicula.component.html',
  styleUrls: ['./editar-pelicula.component.css']
})
export class EditarPeliculaComponent implements OnInit {

  nombreArchivo: String;
  imagenPelicula: String = "";
  id: String;

  tituloPelicula: String;
  sinopsis: String;
  director: String;
  fechaEstreno: String;
  genero: String;

  //Booleanos
  oblTitulo: boolean;
  oblSinopsis: boolean;
  oblDirector: boolean;
  oblFecEstreno: boolean;
  oblGenero: boolean;

  constructor(private rutaActiva: ActivatedRoute, private route: Router, private service: AppService) { }

  ngOnInit() {
    this.rutaActiva.params.subscribe(params =>
      this.id = params.id
    );

    this.obtenerRegistro(this.id);
  }

  metTitulo(event) {
    if (this.tituloPelicula != null && this.tituloPelicula != undefined && this.tituloPelicula != "") {
      this.oblTitulo = false;
    } else {
      this.oblTitulo = true;
    }
  }

  metSinopsis(event) {
    if (this.sinopsis != null && this.sinopsis != undefined && this.sinopsis != "") {
      this.oblSinopsis = false;
    } else {
      this.oblSinopsis = true;
    }
  }

  metDirector(event) {
    if (this.director != null && this.director != undefined && this.director != "") {
      this.oblDirector = false;
    } else {
      this.oblDirector = true;
    }
  }

  metFecEstreno() {
    if (this.fechaEstreno != null && this.fechaEstreno != undefined && this.fechaEstreno != "") {
      this.oblFecEstreno = false;
    } else {
      this.oblFecEstreno = true;
    }
  }

  metGenero(event) {
    if (this.genero != null && this.genero != undefined && this.genero != "") {
      this.oblGenero = false;
    } else {
      this.oblGenero = true;
    }
  }

  editarPelicula() {

    if (this.oblTitulo || this.oblSinopsis || this.oblDirector || this.oblFecEstreno || this.oblGenero) {
      swal.fire({
        icon: 'warning',
        title: 'Advertencia',
        text: 'Debe completar todos los campos.'
      });
    } else {
      var dato = { "nombre_pelicula": this.tituloPelicula, "img_pelicula": this.imagenPelicula, "sinopsis": this.sinopsis, "director": this.director, "fecha_estreno": this.fechaEstreno, "genero": this.genero }

      this.service.actualizarRegistro(this.id, dato).subscribe(data => {
        swal.fire({
          icon: 'success',
          title: 'Confirmación',
          text: 'La película fue modificada exitosamente'
        });

        this.route.navigate(['central-pelicula']);
      })
    }
  }

  inicialiazarBooleanos() {
    this.oblTitulo = true;
    this.oblSinopsis = true;
    this.oblDirector = true;
    this.oblFecEstreno = true;
    this.oblGenero = true;
  }

  obtenerRegistro(id: String) {
    this.service.obtenerDato(id).subscribe(data => {
      this.tituloPelicula = data.nombre_pelicula;
      this.sinopsis = data.sinopsis;
      this.director = data.director;
      this.fechaEstreno = data.fecha_estreno;
      this.genero = data.genero;
      this.imagenPelicula = data.img_pelicula;
    })
  }

  cancelar() {
    swal.fire({
      title: '¿Estás seguro de cancelar la operación?',
      text: "La información cargada se perderá por completo",
      icon: 'warning',
      showCancelButton: true,
      cancelButtonText: 'No',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí'
    }).then((result) => {
      if (result.value) {
        this.route.navigate(['central-pelicula']);
      }
    })
  }

  private delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async capturarInput() {
    var extension = $("#file").val().split('.').pop();

    this.nombreArchivo = $("#file").val().split('\\').pop();

    if (extension == "jpg" || extension == "png" || extension == "jpeg" || extension == "svg" || extension == "jfif") {
      convertToBase64Simple("file");

      await this.delay(500);
      this.imagenPelicula = getBase64Simple();

    } else {
      swal.fire({
        icon: 'warning',
        title: 'Advertencia',
        text: 'El archivo seleccionado no es una imagen'
      });

      //Nulear valor del Input File
      $("#file").val("");
    }
  }

}

