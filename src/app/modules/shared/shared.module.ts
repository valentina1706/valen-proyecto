import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


//material
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from 'src/app/app-routing.module';




@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule
  ]
})
export class SharedModule { }
