import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegistroComponent } from './components/auth/registro/registro.component';
import { HomeComponent } from './components/main/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { DetalleProductoComponent } from './components/detalle-producto/detalle-producto.component';
import { ProductoComponent } from './components/producto/producto.component';
import { ComentarioComponent } from './components/comentario/comentario.component';
import { MisComentariosComponent } from './components/mis-comentarios/mis-comentarios.component';
import { MisProductosComponent } from './components/mis-productos/mis-productos.component';
import { EditarProductoComponent } from './components/editar-producto/editar-producto.component';
import { RedesSocialesComponent } from './components/redes-sociales/redes-sociales.component';
import { AuthInterceptorService } from './services/auth-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    HomeComponent,
    DetalleProductoComponent,
    ProductoComponent,
    ComentarioComponent,
    MisComentariosComponent,
    MisProductosComponent,
    EditarProductoComponent,
    RedesSocialesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
