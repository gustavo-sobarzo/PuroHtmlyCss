const clientes = [new Cliente('Juan', 'Segura', 'juan@gmail.com'),
new Cliente('Gustavo', 'Sobarzo', 'gustavo@gmail.com'),
new Cliente('Maria', 'Lara', 'maria@gmail.com')];

const cargarApp = () => {
  crearListaCliente();
}

let crearClienteHTML = (cliente) => {
  let formatoClienteHtml = `<tr><td>${cliente.nombre}</td><td>${cliente.apellido}</td><td>${cliente.email}</td>
  <td><button class="elemento_eliminar--btn" onclick="eliminarCliente(${cliente.id})"><ion-icon name="close-circle-outline"></ion-icon></button></td></tr>`;
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
  let clienteEleiminar = clientes.findIndex(cliente => cliente.id === id);
  clientes.splice(clienteEleiminar, 1);
  crearListaCliente();
}

let agregarCliente = () => {
  let formulario = document.forms['form'];
  let nombre = formulario['nombre'];
  let apellido = formulario['apellido'];
  let email = formulario['email'];

  if (nombre !== '' && apellido !== '' && email !== '') {
    let comprobarEmail = document.getElementById('email')

    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    //Se muestra un texto a modo de ejemplo, luego va a ser un icono
    clientes.push(new Cliente(nombre.value, apellido.value, email.value))
    crearListaCliente();
  } else {
    alert('hay campos vacios!')
  }
}

