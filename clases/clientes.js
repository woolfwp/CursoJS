
class Cliente extends Persona {
    static contadorCliente = 0;
    constructor(idCliente, fechaRegistro) {
      this._idCliente = ++contadorCliente;
      this._fechaRegistro = fechaRegistro;
    }
  
    get idCliente() {
      return this._idCliente;
    }
  
    get fechaRegistro() {
      return this._fechaRegistro;
    }
  
    set fechaRegistro(fechaRegistro) {
      this._fechaRegistro = fechaRegistro;
    }

    toString(){
      return `${super.toString} ${this._idCliente} ${this._fechaRegistro}`;
    }
  }
  