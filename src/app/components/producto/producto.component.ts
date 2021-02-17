import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router, RouterEvent } from '@angular/router';
import { successDialog, timeMessage } from 'src/app/functions/alerts';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  productoForm = new FormGroup ({
    Producto: new FormControl(''),
    Descripcion: new FormControl('')
  })

  constructor(private router:Router, private productoService:ProductoService) { 
  }

  ngOnInit(): void {
  }

  postForm(form: any) {
    this.productoService.createProducto(form).subscribe((resp: any) => {
      console.log(resp);
      this.router.navigate(['/home']);
    })
  }
}
