import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent implements OnInit {
  productos: any = ''  
  productoForm = new FormGroup ({
    idProducto: new FormControl(this.rutaActiva.snapshot.params.id),
    Producto: new FormControl(this.rutaActiva.snapshot.params.producto),
    Descripcion: new FormControl(this.rutaActiva.snapshot.params.descripcion)
  })
  constructor(private router:Router, private productoService:ProductoService, private rutaActiva: ActivatedRoute) { 
    this.productoService.getProducto(this.rutaActiva.snapshot.params.id).subscribe((resp: any)=> {
      this.productos = resp.Producto
     
    })
  }
  updateForm(form: any) {
    this.productoService.updateProducto(form).subscribe((resp: any) => {
      console.log(resp);
      this.router.navigate(['/home']);
    })
  }

  ngOnInit(): void {
  }

}
