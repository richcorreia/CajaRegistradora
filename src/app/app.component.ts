import { ProductosService } from './productos.service';
import { Producto } from './models/producto.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  arrProductosComida: Producto[]
  arrProductosBebida: Producto[]
  arrProductosPedidos: Producto[]

  constructor(private productosService: ProductosService) {

    this.productosService.getArrProductosComida()
      .then((productos) => {
        this.arrProductosComida = productos
      })

    this.arrProductosBebida = this.productosService.getArrProductosBebida()

    this.arrProductosPedidos = []
  }

  onProductoSeleccionado($event) {
    this.arrProductosPedidos.push($event)
    console.log(this.arrProductosPedidos)
  }

}
