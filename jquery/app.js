const clientes = [new Cliente('Juan', 'Segura', 'juan@gmail.com'),
new Cliente('Gustavo', 'Sobarzo', 'gustavo@gmail.com'),
new Cliente('Maria', 'Lara', 'maria@gmail.com'),
new Cliente('dasd', 'daasda', 'sdads@gmail.com')];

const cargarApp = () => {
  crearListaCliente();
}

let crearClienteHTML = (cliente) => {
  let formatoClienteHtml = `<tr><td>${cliente.nombre}</td><td>${cliente.apellido}</td><td>${cliente.email}</td>
  <td><button class="elemento_eliminar--btn" onclick="eliminarCliente(${cliente.idCliente})"><ion-icon name="close-circle-outline"></ion-icon></button></td></tr>`;
  return formatoClienteHtml;
}

let crearListaCliente = () => {
  let clienteHTML = '';
  for (let cliente of clientes) {
    clienteHTML += crearClienteHTML(cliente)
  }
  return document.getElementById('tablita').innerHTML = clienteHTML;
}

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

    clientes.push(new Cliente(nombre.value, apellido.value, email.value))
    crearListaCliente();
  } else {
    alert('hay campos vacios!')
  }
}


const busqueda = clientes.reduce((acc, cliente) => {
  acc[cliente.email] = ++acc[cliente.email] || 0;
  return acc;
}, {});

const duplicados = clientes.filter((cliente) => {
  return busqueda[cliente.email];
});

console.log(duplicados)