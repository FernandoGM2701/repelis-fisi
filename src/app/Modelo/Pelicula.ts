export class Pelicula{
    _id: String;
    nombre_pelicula: String;
    img_pelicula: String;
    sinopsis: String;
    director: String;
    fecha_estreno: String;
    genero: String;

    Pelicula(){
        this._id = new String();
        this.nombre_pelicula = new String();
        this.img_pelicula = new String();
        this.sinopsis = new String();
        this.director = new String();
        this.fecha_estreno = new String();
        this.genero = new String();
    }
}