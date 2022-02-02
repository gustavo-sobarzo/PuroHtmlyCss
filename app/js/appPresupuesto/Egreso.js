class Egreso extends Dato{
    static idEgreso = 0;
    constructor(descripcion, valor){
        super(descripcion, valor);
        this._idEgreso = ++Egreso.idEgreso;
    }
    get idEgreso(){
        return this._idEgreso;
    }
}