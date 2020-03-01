import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  url="https://crudcrud.com/api/f90b96f80e414eb9861f14666d53c18e/movies";

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

