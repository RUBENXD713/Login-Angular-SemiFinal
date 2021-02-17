import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegistroComponent } from './components/auth/registro/registro.component';
import { HomeComponent } from './components/main/home/home.component';
import { DetalleProductoComponent } from './components/detalle-producto/detalle-producto.component';
import { ProductoComponent } from './components/producto/producto.component';
import { ComentarioComponent } from './components/comentario/comentario.component';
import { MisComentariosComponent } from './components/mis-comentarios/mis-comentarios.component';
import { MisProductosComponent } from './components/mis-productos/mis-productos.component';
import { EditarProductoComponent } from './components/editar-producto/editar-producto.component';
import { AppComponent } from './app.component';
import { RedesSocialesComponent } from './components/redes-sociales/redes-sociales.component';
import { CheckAuthGuard } from './Guards/check-auth.guard'

const routes: Routes = [
  {path: 'login', component: LoginComponent,canActivate:[CheckAuthGuard]},
  {path: 'app/:hiden', component: AppComponent,canActivate:[CheckAuthGuard]},
  {path: 'register', component: RegistroComponent},
  {path: 'redes', component: RedesSocialesComponent},
  {path: 'producto/:id', component: DetalleProductoComponent,canActivate:[CheckAuthGuard]},
  {path: 'nuevoProducto', component: ProductoComponent,canActivate:[CheckAuthGuard]},
  {path: 'updateProducto/:id/:producto/:descripcion', component: EditarProductoComponent,canActivate:[CheckAuthGuard]},
  {path: 'misComentarios', component: MisComentariosComponent,canActivate:[CheckAuthGuard]},
  {path: 'misProductos', component: MisProductosComponent,canActivate:[CheckAuthGuard]},
  {path: 'nuevoComentario/:id', component: ComentarioComponent,canActivate:[CheckAuthGuard]},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: '**', redirectTo: '/login'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }