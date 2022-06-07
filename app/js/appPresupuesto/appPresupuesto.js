let ingresos = [new Ingreso('cobro 1', 10000), new Ingreso('cobro 2', 10000),
new Ingreso('cobro 3', 20000)];

let egresos = [new Egreso('Pago 1', 20000), new Egreso('Pago 2', 10000)];



function lanzadera1(){
    var contenedor = document.getElementById('contenedor_carga');
    contenedor.style.visibility = 'hidden';
    contenedor.style.opacity = '0';
}

const cargarApp = () => {
    cargarCabecero();
    listaEgreso();
    crearListaIngresos();
}

function lanzadera(){
    lanzadera1();
    cargarApp();
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
    <div class="valor" style="color: #1CAAB7">+${formatoMoneda(ingreso.valor)}</div>
    <button class="btnEliminar" onclick="eliminarIngreso(${ingreso.idIngreso})"><i class="material-icons">delete_forever</i></button>`
    return ingresoHtml;
}

let crearListaIngresos = () => {
    let listaIngresos = '';
    for (let ingreso of ingresos) {
        listaIngresos += crearIgresoHtml(ingreso);
    }
    return document.getElementById('listaIngresos').innerHTML = listaIngresos;
}

let crearEgresoHtml = (egreso) => {
    let egresoHtml = `<div class="descripcion">${egreso.descripcion}</div>
    <div class="valor" style="color: #FF6046">-${formatoMoneda(egreso.valor)}</div>
    <button class="btnEliminar" onclick="eliminarEgreso(${egreso.idEgreso})"><i class="material-icons">delete_forever</i></button>`
    return egresoHtml;
}

let listaEgreso = () => {
    let listaEgresos = '';
    for (let egreso of egresos) {
        listaEgresos += crearEgresoHtml(egreso);
    }
    return document.getElementById('listaEgresos').innerHTML = listaEgresos;
}

let eliminarIngreso = (id) => {
    let ingresoEliminar = ingresos.findIndex(ingreso => ingreso.idIngreso === id);
    ingresos.splice(ingresoEliminar, 1);
    cargarCabecero();
    crearListaIngresos();
}

let eliminarEgreso = (id) => {
    let egresoEliminar = egresos.findIndex(egreso => egreso.idEgreso === id);
    egresos.splice(egresoEliminar, 1);
    cargarCabecero();
    listaEgreso();
}
/*-------------------Funcion que permite agregar un usuario a la tabla, se obtienen
los valores almacenados en el formulario para crear el nuevo ingreso posterior a la 
validacion de datos--------------------------*/
const agregarDato = () => {
    let form = document.forms['form']
    let descripcion = form['descripcion'].value;
    let valor = form['valor'].value;
    let select = form['select'].value;
    let valorNumero = parseInt(valor);

    if (!validaVacio(descripcion) && !validaVacio(valor)) {
        if (select === 'ingreso') {
            ingresos.push(new Ingreso(descripcion, valorNumero));
            cargarCabecero();
            crearListaIngresos();
            limpiar();
        } else if (select === 'egreso') {
            egresos.push(new Egreso(descripcion, valorNumero))
            cargarCabecero();
            listaEgreso();
            limpiar();
        }
    } else {
        alert('complete todos los campos')
    }

}

/*----------------------validaciones----------------------------*/
function validaVacio(valor) {
    valor = valor.replace("&nbsp;", "");
    valor = valor == undefined ? "" : valor;
    if (!valor || 0 === valor.trim().length) {
        return true;
    }
    else {
        return false;
    }
}


function limpiar() {
    document.getElementById("descripcion").value = "";
    document.getElementById("valor").value = "";
}

function validarEntrada() {
    var inputbox = document.getElementById("valor");

    if (isNaN(parseFloat(inputbox.value))) {
        inputbox.className = "red";
        
    }
    else {
        inputbox.className = "green";
    }
}
