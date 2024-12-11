import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// TODAS LAS VISTAS DEL MÓDULO PRODUCTO
import { ArosComponent } from './aros/aros.component';
import { CarterasComponent } from './carteras/carteras.component';
import { CollaresComponent } from './collares/collares.component';
import { PulserasComponent } from './pulseras/pulseras.component';
import { RelojesComponent } from './relojes/relojes.component';

const routes: Routes = [
  {
    path:"aros",component:ArosComponent
  },
  {
    path:"buzos",component:CarterasComponent
  },
  {
    path:"collares",component:CollaresComponent
  },
  {
    path:"pulseras",component:PulserasComponent
  },
  {
    path:"relojes",component:RelojesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }