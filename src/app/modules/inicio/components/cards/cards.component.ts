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
          imagen: "https://lunamar.co/cdn/shop/files/LUNA_MAR_COLLECTION0619.jpg?v=1722890636",
          alt: "lalal"
        },

        {
          id: "lalal",
          nombre: "lalal",
          precio: 5000000,
          tipo: "lalal",
          color: "lalal",
          imagen: "https://lunamar.co/cdn/shop/files/LUNA_MAR_COLLECTION0282.jpg?v=1722889635",
          alt: "lalal"
        },
        {
          id: "lalal",
          nombre: "lalal",
          precio: 5000000,
          tipo: "lalal",
          color: "lalal",
          imagen: "https://lunamar.co/cdn/shop/files/LUNA_MAR_COLLECTION0242.jpg?v=1722890103",
          alt: "lalal"
        },
        {
          id: "lalal",
          nombre: "lalal",
          precio: 5000000,
          tipo: "lalal",
          color: "lalal",
          imagen: "https://lunamar.co/cdn/shop/files/LUNAMARCOLLECTION1185.jpg?v=1726675971",
          alt: "lalal"
        },
        {
          id: "lalal",
          nombre: "lalal",
          precio: 5000000,
          tipo: "lalal",
          color: "lalal",
          imagen: "https://lunamar.co/cdn/shop/files/LUNA_MAR_COLLECTION1026.jpg?v=1724773560",
          alt: "lalal"
        },
        {
          id: "lalal",
          nombre: "lalal",
          precio: 5000000,
          tipo: "lalal",
          color: "lalal",
          imagen: "https://lunamar.co/cdn/shop/files/LUNA_MAR_COLLECTION0678.jpg?v=1724775490",
          alt: "lalal"
        }
      ]
    }
  }
