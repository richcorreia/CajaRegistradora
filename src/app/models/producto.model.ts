export class Producto{

    nombre: string
    precio: number
    imagen: string

    // constructor(pNombre: string, pPrecio: number, pImagen: string) {
    //     this.nombre = pNombre
    //     this.precio = pPrecio
    //     this.imagen = pImagen
    // }

    // constructor(values) {
    //     this.nombre = values.nombre || ""
    //     this.precio = values.precio || 0
    //     this.imagen = values.imagen || ""
    // }

    constructor({ nombre = "", precio = 0, imagen = "" }) {
        this.nombre = nombre
        this.precio = precio
        this.imagen = imagen
    }

}