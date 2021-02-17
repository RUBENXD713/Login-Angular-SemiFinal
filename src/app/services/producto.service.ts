import { HttpClient, HttpHeaderResponse, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  apiURL = environment.apiURL;
  header = new HttpHeaders({'Type-content': 'aplication/json'/*, 'Authorization': 'Bearer '+ localStorage.getItem("personalToken")*/})

  constructor(private http: HttpClient) { 
    console.log('Servicio producto')
    this.header.append('Authorization', 'Bearer '+ localStorage.getItem("personalToken"));
    console.log(this.header)
  }
  getProductos(){
    return this.http.get(`${this.apiURL}productos`, {
      headers: this.header
    });
  }
  getProducto(id: number | string) {
    return this.http.get(`${this.apiURL}productos/`+ id, {
      headers: this.header
    });
  }

  getMisProductos(){
    return this.http.get(`${this.apiURL}misProductos`, {
      headers: this.header
    });
  }

  createProducto(form:Producto): Observable<Response> {
    let direccion = this.apiURL + "nuevoProducto"
    return this.http.post<Response>(direccion, form,{ headers: this.header})
  }

  updateProducto( form:Producto): Observable<Response> {
    let direccion = this.apiURL + "updateProducto/"
    return this.http.put<Response>(direccion, form,{ headers: this.header})
  }

  deleteProducto(id: number | string){
    return this.http.delete(`${this.apiURL}deleteProducto/` + id, {
      headers: this.header
    });
  }
}
