

//Creo el objeto clientes y luego inserto cliente usando la clase Cliente
const clientes = [new Cliente('Juan', 'Segovia', 'juan@gmail.com'),
new Cliente('Gustavo', 'Sobarzo', 'gustavo@gmail.com'),
new Cliente('Maria', 'Castro', 'maria@gmail.com')];
//Funcion que se ejecuta al cargar el cuerpo del HTML a su vez este crea la lista de clientes
//con la funcion crearListaCliente

function lanzador1(){
 var contenedor = document.getElementById('contenedor_carga');
 contenedor.style.visibility = 'hidden';
 contenedor.style.opacity = '0';
}

const cargarApp = () => {
  crearListaCliente();
}

function lanzador(){
  lanzador1();
  cargarApp();
}



//Recibe un cliente obtenido de clientes y crea la plantilla html con los atributos
//de nombre apellido y idCliente retorna todo en formatoClienteHtml
let crearClienteHTML = (cliente) => {
  let formatoClienteHtml = `<tr><td data-label="Nombre">${cliente.nombre}</td><td data-label="Apellido">${cliente.apellido}</td><td data-label="Email">${cliente.email}</td>
  <td data-label="Eliminar"><button class="elemento_eliminar--btn" onclick="eliminarCliente(${cliente.idCliente})"><ion-icon name="close-circle-outline"></ion-icon></button></td></tr>`;
  return formatoClienteHtml;
}
//Extrae cada cliente mediante un for de la lista de clientes, cada cliente lo envia a 
//crearClientehtml para generar codigo html posteriormente retorna una insercion de codigo en el html
//mediante el id porporcionado
let crearListaCliente = () => {
  let clienteHTML = '';
  for (let cliente of clientes) {
    clienteHTML += crearClienteHTML(cliente)
  }
  return document.getElementById('tablita').innerHTML = clienteHTML;
}
//Recibe un id en este caso de cliente, mediante la clase findIndex comparamos si el id 
//
const eliminarCliente = (id) => {
  let clienteEleiminar = clientes.findIndex(cliente => id === cliente.idCliente);
  clientes.splice(clienteEleiminar, 1);
  crearListaCliente();
}

let agregarCliente = () => {
  let formulario = document.forms['form'];
  let nombre = formulario['nombre'];
  let apellido = formulario['apellido'];
  let email = formulario['email'];

  if (nombre.value !== '' && apellido.value !== '' && email.value !== '') {

    if (validarEmail(email) === true) {
      clientes.push(new Cliente(nombre.value, apellido.value, email.value))
      crearListaCliente();
    }

  } else {
    alert('hay campos vacios!')
  }
}


function validarEmail(campo) {
  if (/^\w+([\.-]?\w+)*@(?:|hotmail|outlook|yahoo|live|gmail)\.(?:|com|es)+$/.test(campo.value)) {
    alert("La dirección de email " + campo.value + " es correcta.");
    let emailValidado = true;
    return emailValidado;
  } else {
    alert("La dirección de email es incorrecta.");
    let emailValidado = false;
    return emailValidado;
  }
}