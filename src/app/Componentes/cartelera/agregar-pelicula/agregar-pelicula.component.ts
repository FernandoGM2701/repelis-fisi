import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { Router } from '@angular/router';
import { AppService } from 'src/app/service/app.service';
import { Pelicula } from 'src/app/Modelo/Pelicula';

declare const $: any;

declare const convertToBase64Simple: any;

declare const getBase64Simple: any;

@Component({
  selector: 'app-agregar-pelicula',
  templateUrl: './agregar-pelicula.component.html',
  styleUrls: ['./agregar-pelicula.component.css']
})
export class AgregarPeliculaComponent implements OnInit {

  nombreArchivo: String;
  imagenPelicula: String = "";
  imagenBoolean: boolean;

  pelicula: Pelicula;

  //Variables
  tituloPelicula: String;
  sinopsisPelicula: String;
  directorPelicula: String;
  fechaEstrenoPelicula: String;
  generoPelicula: String;

  //Booleanos
  oblTitulo: boolean;
  oblSinopsis: boolean;
  oblDirector: boolean;
  oblFecEstreno: boolean;
  oblGenero: boolean;
  oblImagen: boolean;

  constructor(private route: Router, private service: AppService) {
  }

  ngOnInit() {
    this.imagenBoolean = false;
    this.inicialiazarBooleanos();
  }

  metTitulo(event){
    if(this.tituloPelicula!=null && this.tituloPelicula!=undefined && this.tituloPelicula!=""){
      this.oblTitulo = false;
    }else{
      this.oblTitulo = true;
    }
  }

  metSinopsis(event){
    if(this.sinopsisPelicula!=null && this.sinopsisPelicula!=undefined && this.sinopsisPelicula!=""){
      this.oblSinopsis = false;
    }else{
      this.oblSinopsis = true;
    }
  }

  metDirector(event){
    if(this.directorPelicula!=null && this.directorPelicula!=undefined && this.directorPelicula!=""){
      this.oblDirector = false;
    }else{
      this.oblDirector = true;
    }
  }

  metFecEstreno(){
    if(this.fechaEstrenoPelicula!=null && this.fechaEstrenoPelicula!=undefined && this.fechaEstrenoPelicula!=""){
      this.oblFecEstreno = false;
    }else{
      this.oblFecEstreno = true;
    }
  }

  metGenero(event){
    if(this.generoPelicula!=null && this.generoPelicula!=undefined && this.generoPelicula!=""){
      this.oblGenero = false;
    }else{
      this.oblGenero = true;
    }
  }

  inicialiazarBooleanos(){
    this.oblTitulo = true;
    this.oblSinopsis = true;
    this.oblDirector = true;
    this.oblFecEstreno = true;
    this.oblGenero = true;
    this.oblImagen = true;
  }

  registrarPelicula() {

    if(this.oblTitulo||this.oblSinopsis||this.oblDirector||this.oblFecEstreno||this.oblGenero||this.oblImagen){
      swal.fire({
        icon: 'warning',
        title: 'Advertencia',
        text: 'Debe completar todos los campos.'
      });
    }else{
      var dato = { "nombre_pelicula": this.tituloPelicula, "img_pelicula": this.imagenPelicula, "sinopsis": this.sinopsisPelicula, "director": this.directorPelicula, "fecha_estreno": this.fechaEstrenoPelicula, "genero": this.generoPelicula }

      this.service.registrar(dato).subscribe(data => {
        swal.fire({
          icon: 'success',
          title: 'Confirmación',
          text: 'El registro de la película fue exitoso'
        });
  
        this.route.navigate(['central-pelicula']);
      })
    }
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

    if (extension == "jpg" || extension == "png" || extension == "jpeg" || extension == "svg"  || extension ==  "jfif") {
      convertToBase64Simple("file");

      await this.delay(500);
      this.imagenPelicula = getBase64Simple();

      this.imagenBoolean = true;

      this.oblImagen = false;

      console.log(this.imagenPelicula);

      //this.evento.pdf = this.archivoExcel.split(',').pop();

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
