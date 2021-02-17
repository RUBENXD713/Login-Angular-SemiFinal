import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Comentario } from '../models/comentario';
import { AuthInterceptorService } from './auth-interceptor.service'

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  apiURL = environment.apiURL;
  header = new HttpHeaders({'Type-content': 'aplication/json'/*, 'Authorization': 'Bearer '+ localStorage.getItem("personalToken")*/})
  //interceptor: AuthInterceptorService = new AuthInterceptorService() 

  constructor(private http: HttpClient) { 
    console.log('Servicio producto')
    //this.header.append('Authorization', 'Bearer '+ localStorage.getItem("personalToken"));
    console.log(this.header)
  }

  getComentarios(id: number | string){
    return this.http.get(`${this.apiURL}comentarioProducto/` + id, {
      headers: this.header
      //this.interceptor.intercept()
    });
  }

  getMisComentarios(){
    return this.http.get(`${this.apiURL}misComentarios/`, {
      headers: this.header
    });
  }

  createCometario(form:Comentario): Observable<Response> {
    let direccion = this.apiURL + "nuevoComentario"
    return this.http.post<Response>(direccion, form,{ headers: this.header})
  }

  deleteComentario(id: number | string){
    return this.http.delete(`${this.apiURL}deleteComentario/` + id, {
      headers: this.header
    });
  }
  
}