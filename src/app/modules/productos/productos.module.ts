import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarterasComponent } from './carteras/carteras.component';
import { RelojesComponent } from './relojes/relojes.component';
import { ArosComponent } from './aros/aros.component';
import { CollaresComponent } from './collares/collares.component';
import { PulserasComponent } from './pulseras/pulseras.component';



@NgModule({
  declarations: [
    CarterasComponent,
    RelojesComponent,
    ArosComponent,
    CollaresComponent,
    PulserasComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductosModule { }
