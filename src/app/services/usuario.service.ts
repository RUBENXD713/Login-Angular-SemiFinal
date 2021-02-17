import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  apiURL = environment.apiURL;
  header = new HttpHeaders({'Type-content': 'aplication/json'/*, 'Authorization': 'Bearer '+ localStorage.getItem("personalToken")*/})

  constructor(private http: HttpClient) { 
    console.log('Servicio producto')
    this.header.append('Authorization', 'Bearer '+ localStorage.getItem("personalToken"));
    console.log(this.header)
  }

  getUsuario(id: number | string) {
    return this.http.get(`${this.apiURL}personaProducto/` + id, {
      headers: this.header
    });
  }

}
