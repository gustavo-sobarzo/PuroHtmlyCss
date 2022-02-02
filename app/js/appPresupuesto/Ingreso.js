class Ingreso extends Dato{
    static ingresoId = 0;
    constructor(descripcion, valor){
        super(descripcion, valor);
        this._ingresoId =  ++Ingreso.ingresoId;
    }
    get ingresoId(){
        return this._ingresoId;
    }
}