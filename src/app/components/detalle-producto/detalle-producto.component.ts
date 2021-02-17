import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ComentarioService } from 'src/app/services/comentario.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {

  public productos:any
  public autor:any
  public comentarios:Array<any> = []
  public id: number

  constructor(private productoService:ProductoService, private usuarioService:UsuarioService, private comentarioService:ComentarioService, private router:Router, private rutaActiva: ActivatedRoute) { 
    this.productoService.getProducto(this.rutaActiva.snapshot.params.id).subscribe((resp: any)=> {
      this.productos = resp.Producto
      console.log(this.productos)
      console.log(this.rutaActiva.snapshot.params.id)
    })

    this.usuarioService.getUsuario(this.rutaActiva.snapshot.params.id).subscribe((resp: any)=> {
      this.autor = resp.Persona
      console.log(this.autor)
    })

    this.comentarioService.getComentarios(this.rutaActiva.snapshot.params.id).subscribe((resp: any)=> {
      this.comentarios = resp.Comentarios
      console.log(this.comentarios)
    })
  }

  ngOnInit(): void {
  }

}
