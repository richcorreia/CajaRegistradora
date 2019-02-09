import { Producto } from './models/producto.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  arrProductosComida: Producto[]
  arrProductosBebida: Producto[]

  arrProductosPedidos: Producto[] 

  constructor() { 
    this.arrProductosComida = [
      new Producto({ nombre: 'pan', precio: 1.20, imagen: 'pan.jpg' }),
      new Producto({ nombre: 'chocolate', precio: 3.50, imagen: 'chocolate.jpg' }), 
      new Producto({ nombre: 'Entrecot', precio: 12.50, imagen: 'entrecot.jpg' }),
      new Producto({ nombre: 'Arroz', precio: 6.50, imagen: 'arroz.jpg'})
    ]

    this.arrProductosBebida = [
      new Producto({ nombre: 'vino', precio: 0.7, imagen: 'vino.jpg' }),
      new Producto({ nombre: 'cerveza', precio: 0.70, imagen: 'cerveza.jpg'})
    ]

    this.arrProductosPedidos = []
  }

  getArrProductosComida(): Promise<Producto[]> {
    return new Promise((resolve, reject) => {
      resolve(this.arrProductosComida)
    })
  }

  getArrProductosBebida() {
    return this.arrProductosBebida
  }

  agregarProductoAPedidos(prod: Producto) {
    this.arrProductosPedidos.push(prod)
  }

  getArrProductosPedidos(): Promise<Producto[]>{
    return Promise.resolve(this.arrProductosPedidos)
  }

}
