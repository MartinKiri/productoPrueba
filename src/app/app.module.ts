import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from "@angular/common/http";

// * Componentes *
import { AppComponent } from './app.component';
import { ProductoComponent } from './components/producto/producto.component';
import { ListadoComponent } from './components/listado/listado.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductoComponent,
    ListadoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
