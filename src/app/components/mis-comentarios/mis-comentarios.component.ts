import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComentarioService } from 'src/app/services/comentario.service';

@Component({
  selector: 'app-mis-comentarios',
  templateUrl: './mis-comentarios.component.html',
  styleUrls: ['./mis-comentarios.component.css']
})
export class MisComentariosComponent implements OnInit {

  public comentarios:Array<any> = []

  constructor(private comentarioService:ComentarioService, private rutaActiva: ActivatedRoute) { 
    this.comentarioService.getMisComentarios().subscribe((resp: any)=> {
      this.comentarios = resp.Comentarios
      console.log(this.comentarios)
    })
  }

  deleteComentario(id: number) {
    this.comentarioService.deleteComentario(id).subscribe((resp: any) => {
      console.log(resp);
    })
  }

  ngOnInit(): void {
  }

}
