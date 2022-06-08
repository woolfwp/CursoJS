class Persona {
  static contadorPersona = 0;
  constructor( nombre, apellido, email) {
    this._idPersona = ++Persona.contadorPersona;
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
    `${this._idPersona} 
     ${this._nombre} 
     ${this._apellido} 
     ${this._email}`;
  }
}

