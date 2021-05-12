import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VistadetalleComponent } from './vistadetalle.component';



@NgModule({
  declarations: [VistadetalleComponent],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [VistadetalleComponent]
})
export class VistadetalleModule { }
