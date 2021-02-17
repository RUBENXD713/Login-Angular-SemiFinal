import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public productos:Array<any> = []
  //public products: Observable<Producto> = this.productos
  selectedId: number;

  constructor(private productoService:ProductoService, private router:Router, private route:ActivatedRoute) {
      /*if (localStorage.getItem('personalToken')==null){
        this.router.navigate(['/login']);
      }*/
      this.productoService.getProductos().subscribe((resp: any)=> {
        this.productos = resp.Productos
        console.log(this.productos)
      })
     }

     /*public logOut() {
       localStorage.setItem('personalToken', "null")
       this.router.navigate(['/login']);
     }*/
  ngOnInit(): void {
  }

}
