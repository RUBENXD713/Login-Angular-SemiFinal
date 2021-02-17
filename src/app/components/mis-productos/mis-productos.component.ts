import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-mis-productos',
  templateUrl: './mis-productos.component.html',
  styleUrls: ['./mis-productos.component.css']
})
export class MisProductosComponent implements OnInit {

  public productos:Array<any> = []

  constructor(private productoService:ProductoService, private rutaActiva: ActivatedRoute) { 
    this.productoService.getMisProductos().subscribe((resp: any)=> {
      this.productos = resp.MisProductos
      console.log(this.productos)
    })
  }

  deleteProducto(id: number) {
    this.productoService.deleteProducto(id).subscribe((resp: any) => {
      console.log(resp);
    })
  }

  ngOnInit(): void {
  }

}
