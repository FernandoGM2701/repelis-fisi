import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  url="https://crudcrud.com/api/3cbe431ab4804c5e9b4e13f6df57643b/movies";

  constructor(private http:HttpClient) { }

  registrar(pelicula: any): Observable<any>{
    return this.http.post(this.url,pelicula, {responseType: 'json'});
  }

  eliminar(id: any): Observable<any>{
    return this.http.delete(this.url + "/" + id);
  }

  obtenerDatos(): Observable<any>{
    return this.http.get(this.url,{responseType: "json"});
  }
  
  actualizarRegistro(id: String, pelicula: any): Observable<any>{
    return this.http.put(this.url+"/"+id,pelicula,{responseType: "json"});
  }

  obtenerDato(id: String): Observable<any>{
    return this.http.get(this.url+"/"+id,{responseType: "json"});
  }

}

