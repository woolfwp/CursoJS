
class Cliente extends Persona {
    static contadorCliente = 0;
    constructor(idCliente, fechaRegistro) {
      this._idCliente = ++contadorCliente;
      this._fechaRegistro = fechaRegistro;
    }
  
    get idCliente() {
      return this.idCliente;
    }
  
    get fechaRegistro() {
      return this.fechaRegistro;
    }
  
    set fechaRegistro(fechaRegistro) {
      return this.fechaRegistro;
    }
  }
  