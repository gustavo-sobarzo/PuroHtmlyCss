let ingresos = [new Ingreso('cobro 1', 10000), new Ingreso('cobro 2', 10000),
new Ingreso('cobro 3', 20000)];

let egresos = [new Egreso('Pago 1', 20000), new Egreso('Pago 2', 10000)];

const cargarApp = () => {
    cargarCabecero();
    listaEgreso();
    crearListaIngresos();
}

const cargarCabecero = () => {
    document.getElementById('totIngresos').innerHTML = formatoMoneda(sumaIngresos());
    document.getElementById('totEgresos').innerHTML = formatoMoneda(sumaEgresos());
    document.getElementById('presupuesto').innerHTML = formatoMoneda(presupuestoTotal());
    document.getElementById('porcentaje').innerHTML = formatoPorcentaje(porcetnajeEgreso());
}

let sumaIngresos = () => {
    let totalIngresos = 0;
    for (let ingreso of ingresos) {
        totalIngresos += ingreso.valor;
    }
    return totalIngresos;
}

let sumaEgresos = () => {
    let totalEgresos = 0;
    for (let egreso of egresos) {
        totalEgresos += egreso.valor;
    }
    return totalEgresos;
}

const presupuestoTotal = () => {
    let presupuesto = sumaIngresos() - sumaEgresos();
    return presupuesto;
}

const porcetnajeEgreso = () => {
    let porcentaje = sumaEgresos() / sumaIngresos();
    return porcentaje;
}

const formatoMoneda = (valor) => {
    return valor.toLocaleString('es-CL', { style: 'currency', currency: 'CLP', minimumFractionDigits: 0 })
}

const formatoPorcentaje = (valor) => {
    return valor.toLocaleString('style', { style: 'percent', minimumFractionDigits: 2 })
}

let crearIgresoHtml = (ingreso) => {
    let ingresoHtml = `<div class="descripcion">${ingreso.descripcion}</div>
    <div class="valor">${formatoMoneda(ingreso.valor)}</div>
    <button class="btnEliminar" onclick="eliminarIngreso()"><i class="material-icons">delete_forever</i></button>`
    return ingresoHtml;
}

let crearListaIngresos = () =>{
    let listaIngresos = '';
    for(let ingreso of ingresos){
        listaIngresos += crearIgresoHtml(ingreso);
    }
    return document.getElementById('listaIngresos').innerHTML = listaIngresos;
}

let crearEgresoHtml = (egreso) => {
    let egresoHtml = `<div class="descripcion">${egreso.descripcion}</div>
    <div class="valor">${formatoMoneda(egreso.valor)}</div>
    <button class="btnEliminar" onclick="eliminarEgreso()"><i class="material-icons">delete_forever</i></button>`
    return egresoHtml;
}

let listaEgreso = () => {
    let listaEgresos = '';
    for (let egreso of egresos) {
        listaEgresos += crearEgresoHtml(egreso);
    }
    return document.getElementById('listaEgresos').innerHTML = listaEgresos;
}

const eliminarIngreso = (id)=>{
    let ingresoEliminar = ingresos.findIndex(ingreso => ingreso.id === id);
    ingresos.splice(ingresoEliminar, 1);
    cargarCabecero();
    crearListaIngresos();
}

const eliminarEgreso = (id)=>{
    let egresoEliminar = egresos.findIndex(egreso => egreso.id === id);
    egresos.splice(egresoEliminar, 1);
    cargarCabecero();
    listaEgreso();
}