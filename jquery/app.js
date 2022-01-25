const clientes = [new Cliente('Juan', 'Segura', 'juan@gmail.com'),
new Cliente('Gustavo', 'Sobarzo', 'gustavo@gmail.com'),
new Cliente('Maria', 'Lara', 'maria@gmail.com')];

const cargarApp = () => {
  crearListaCliente();
}

let crearClienteHTML = (cliente) => {
  let formatoClienteHtml = `<tr><td>${cliente.nombre}</td><td>${cliente.apellido}</td><td>${cliente.email}</td>
  <td><button class="elemento_eliminar--btn" onclick="eliminarIngreso(${cliente.id})"><ion-icon name="close-circle-outline"></ion-icon></button></td></tr>`;
  return formatoClienteHtml;
}

let crearListaCliente = () => {
  let clienteHTML = '';
  for (let cliente of clientes) {
    clienteHTML += crearClienteHTML(cliente)
  }
  return document.getElementById('tablita').innerHTML = clienteHTML;
}

