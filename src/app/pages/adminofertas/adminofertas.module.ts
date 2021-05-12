import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminofertasComponent } from './adminofertas.component';



@NgModule({
  declarations: [AdminofertasComponent],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [AdminofertasComponent]
})
export class AdminofertasModule { }
