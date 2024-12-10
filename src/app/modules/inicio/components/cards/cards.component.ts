import { Component } from '@angular/core';
import { accesorios } from 'src/app/models/accesorios';

  @Component({
    selector: 'app-cards',
    templateUrl: './cards.component.html',
    styleUrls: ['./cards.component.css']
  })
  export class CardsComponent {
    public coleccionaccesorios: accesorios[]

    constructor() {
      this.coleccionaccesorios = [
        {
          id: "lalal",
          nombre: "lalal",
          precio: 5000000,
          tipo: "lalal",
          color: "lalal",
          imagen: "lalal",
          alt: "lalal"
        },

        {
          id: "lalal",
          nombre: "lalal",
          precio: 5000000,
          tipo: "lalal",
          color: "lalal",
          imagen: "lalal",
          alt: "lalal"
        },
        {
          id: "lalal",
          nombre: "lalal",
          precio: 5000000,
          tipo: "lalal",
          color: "lalal",
          imagen: "lalal",
          alt: "lalal"
        }
      ]
    }
  }
