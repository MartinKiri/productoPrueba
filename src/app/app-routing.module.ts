import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoComponent } from './components/listado/listado.component';
import { ProductoComponent } from './components/producto/producto.component';

const routes: Routes = [
  {
    path: '',
    component: ListadoComponent,
  },
  {
    path: 'producto',
    component: ProductoComponent,
  },
  {
    path: 'editar-producto/:id',
    component: ProductoComponent,
  },
  
  //** Para que te redireccione a un link en el que tienes contenido en vez de que te envie en alguno que no haya */
  {
    path: '**',
    redirectTo:'',pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
