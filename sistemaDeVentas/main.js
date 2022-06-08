class Producto {
  static contPro = 0;
  constructor(nombre, precio) {
    this._idproducto = ++Producto.contPro;
    this._nombre = nombre;
    this._precio = precio;
  }

  get idproducto() {
    return this._idproducto;
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(nombre) {
    this._nombre = nombre;
  }

  get precio() {
    return this._precio;
  }

  set precio(precio) {
    this._precio = precio;
  }

  toString() {
    return `${this._idproducto} ${this._nombre} ${this._precio}`;
  }
}

class Orden {
  static contOrd = 0;

  static get MAX_PROD() {
    return 5;
  }

  constructor() {
    this._idOrden = ++Orden.contOrd;
    this._productos = [];
    this.contProAdd = 0;
  }

  get idOrden() {
    return this._idOrden;
  }

  addProd(producto) {
    if (this._productos.length <= Orden.MAX_PROD) {
      this._productos.push(producto);
    } else {
      console.log("supero la cantidad de productos");
    }
  }

  calTotal() {
    let totalVenta = 0;
    for (let producto of this._productos) {
      totalVenta += producto.precio;
    }
    return totalVenta;
  }

  viwOrd() {
    let prodOrden = "";
    for (let producto of this._productos) {
      prodOrden +=  '\n' + producto.toString() + ' ';
    }

    console.log(`Orden: ${this._idOrden} 
    Productos: ${prodOrden}, 
    Total: ${this.calTotal()}`);
  }
}

let producto1 = new Producto('camisa', 200);
let producto2 = new Producto('pantalon',100);

let orden1 = new Orden();
orden1.addProd(producto1);
orden1.addProd(producto2);

orden1.viwOrd();