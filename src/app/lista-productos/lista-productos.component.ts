import { ProductosService } from './../productos.service';
import { Producto } from './../models/producto.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  @Input() titulo: string
  @Input() productos: Producto[]

  @Output()productoSeleccionado = new EventEmitter()

  constructor(private productosService: ProductosService) { }

  ngOnInit() {
  }

  handleClick(prod) {    
    // this.productoSeleccionado.emit(prod)
    this.productosService.agregarProductoAPedidos(prod)
  }

}
