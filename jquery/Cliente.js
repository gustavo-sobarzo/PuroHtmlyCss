class Cliente {
    static contadorId = 0;
    constructor(nombre, apellido, email){
        this._id = ++Cliente.contadorId;
        this._nombre = nombre;
        this._apellido = apellido;
        this._email = email;
    }
    get idCliente(){
        return this._id;
    }

    get nombre(){
        return this._nombre;
    }
    set nombre(newNombre){
        return this._nombre = newNombre;
    }

    get apellido(){
        return this._apellido;
    }
    set apellido(newApellido){
        return this._apellido =newApellido;
    }

    get email(){
        return this._email;
    }
    set email(newEmail){
        return this._email = newEmail;
    }
}