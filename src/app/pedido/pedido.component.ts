import { ProductosService } from './../productos.service';
import { Producto } from './../models/producto.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  arrPedido: Producto[]

  constructor(private productosService: ProductosService) {
    this.productosService.getArrProductosPedidos()
      .then((productos) => {
        this.arrPedido = productos
      })
  }

  ngOnInit() {
  }

  calcularTotal() {
    let total = 0
    for (let p of this.arrPedido) {
      total += p.precio
    }
    return total
  }

}
