class Producto {
  static contPro = 0;
  constructor(nombre, precio) {
    this._idproducto = ++Producto.contPro;
    this._nombre = nombre;
    this._precio = precio;
  }

  get _idproducto() {
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
    return `${this._idPersona} ${this._nombre} ${this._precio}`;
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
}
