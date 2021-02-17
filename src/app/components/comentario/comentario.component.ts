import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ComentarioService } from 'src/app/services/comentario.service';

@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.css']
})
export class ComentarioComponent implements OnInit {
  comentarioForm = new FormGroup ({
    Comentario: new FormControl(''),
    Producto: new FormControl(this.rutaActiva.snapshot.params.id)
  })

  constructor(private router:Router,private comentarioService:ComentarioService, private rutaActiva: ActivatedRoute) { 
  }

  ngOnInit(): void {
    let token = localStorage.getItem('personalToken')
  }

  postForm(form: any) {
    this.comentarioService.createCometario(form).subscribe((resp: any) => {
      console.log(resp);
      this.router.navigate(['/producto/',this.rutaActiva.snapshot.params.id]);
    })
  }
}
