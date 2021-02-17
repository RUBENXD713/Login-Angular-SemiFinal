import { hostViewClassName } from '@angular/compiler';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from './services/producto.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto1a';

  selectedId: number;
  hiden:number=0;

  constructor(private productoService:ProductoService, private router:Router, private route:ActivatedRoute) {
    /*if (localStorage.getItem('personalToken')==null){
      this.hiden = 0
      this.router.navigate(['/login']);
    }*/
      this.hiden = 1 //this.route.snapshot.params.hiden;
      this.router.navigate(['/home']);
  }
     public mostrar(){
     }

     public logOut() {
       localStorage.setItem('personalToken', null)
       this.hiden = 0
       this.router.navigate(['/login']);
     }
     ngOnInit() {
     }
}
