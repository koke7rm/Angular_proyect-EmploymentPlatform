import { AdminofertasComponent } from './pages/adminofertas/adminofertas.component';
import { VistadetalleComponent } from './pages/vistadetalle/vistadetalle.component';

import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { NuevaofertaComponent } from './pages/nuevaoferta/nuevaoferta.component';


const routes: Routes = [
   /* ruta con path vacio que accedera a la raiz que por defecto abrirá home */
   {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
},

/* ruta  con el path home que abrirá HomeComponent */
{
  path: 'home',
  component: HomeComponent,
},

{
  path: 'detalle',
  component: VistadetalleComponent,
},

{
  path: 'login',
  component: LoginComponent,
},

{
  path: 'adminofertas',
  component: AdminofertasComponent,
},

{
  path: 'nuevaoferta',
  component: NuevaofertaComponent,
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
