class Persona {
    static contadorPersona = 0;
    constructor( nombre, apellido, email) {
      this._idPersona = ++Persona.contadorPersona;
      this._nombre = nombre;
      this._apellido = apellido;
      this._email = email;
    }
  
    get idPersona() {
      return this._idPersona;
    }
  
    get nombre() {
      return this._nombre;
    }
  
    set nombre(nombre) {
       this._nombre = nombre;
    }
  
    get apellido() {
      return this._apellido;
    }
  
    set apellido(apellido) {
        this._apellido = apellido;
    }
  
    get email() {
      return this_.email;
    }
  
    set email(email) {
      this._email = email;
    }
  
    toString(){
        return  `${this._idPersona}  
                 ${this._nombre}  
                 ${this._apellido}  
                 ${this._email}` ;
    }
  }
  
  



class Empleado extends Persona {
    static contadorEmpleado = 0;
    constructor(sueldo) {
      this._idEmpleado = ++Empleado.idEmpleado;
      this._sueldo = sueldo;
    }
  
    get idEmpleado() {
      return this._idEmpleado;
    }
  
    get sueldo() {
      return this._sueldo;
    }
  
    set sueldo(sueldo) {
      this._sueldo = sueldo;
    }

    toString(){
      return `${super.toString()} ${this._idEmpleado} ${this._sueldo}`;
    }

  }
  
  
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
  
  //prueba clase persona

  let persona1 = new Persona('SEBAS', 'GOMEZ' , 'gmail.com');
  console.log(persona1.toString());