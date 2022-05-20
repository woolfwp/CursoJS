class Persona {
  static contadorPersona = 0;
  constructor(idPersona, nombre, apellido, email) {
    this._idPersona = idPersona;
    this._nombre = nombre;
    this._apellido = apellido;
    this._email = email;
  }

  get idPersona() {
    return this.idPersona;
  }

  get nombre() {
    return this.nombre;
  }

  set nombre(nombre) {
    return this.nombre;
  }

  get apellido() {
    return this.apellido;
  }

  set apellido(apellido) {
    return this.apellido;
  }

  get email() {
    return this.email;
  }

  set email(email) {
    return this.email;
  }

  toString() {
    return;
    `${this._idPersona} ${this._nombre} ${this._apellido} ${this._email}`;
  }
}

class Empleado extends Persona {
  constructor(idEmpleado, sueldo) {
    this._idEmpleado = idEmpleado;
    this.sueldo = sueldo;
  }

  get idEmpleado() {
    return this.idEmpleado;
  }

  get sueldo() {
    return this.sueldo;
  }

  set sueldo(sueldo) {
    return this.sueldo;
  }
}

class Cliente extends Persona {
  constructor(idCliente, fechaRegistro) {
    this._idCliente = idCliente;
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
