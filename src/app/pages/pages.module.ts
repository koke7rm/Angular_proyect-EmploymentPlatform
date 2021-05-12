import { NuevaofertaModule } from './nuevaoferta/nuevaoferta.module';
import { AdminofertasModule } from './adminofertas/adminofertas.module';
import { LoginModule } from './login/login.module';
import { VistadetalleModule } from './vistadetalle/vistadetalle.module';

import { HomeModule } from './home/home.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


@NgModule({

    declarations: [],
    imports: [CommonModule, RouterModule, HomeModule, VistadetalleModule, LoginModule, AdminofertasModule, NuevaofertaModule],
    exports: [HomeModule], /* Se exportan los componentes para poder ser utilizados por otros módulos*/
    providers: []
})

export class PagesModule{

}
