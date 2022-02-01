<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="/css/stylesIndex.css">
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
  <script src="https://code.jquery.com/jquery-3.3.1.js" integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60="
    crossorigin="anonymous">
    </script>
  <script src="https://code.jquery.com/jquery-3.3.1.js" integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60="
    crossorigin="anonymous">
    </script>
  <script>
    $(function () {
      $("#header").load("headFooter/head.html");
    });
  </script>
  <title>Contenido</title>
</head>

<body>
  <div id="header">
  </div>

  <div class="contenedor">
    <div class="contenedorGrid">
      <div class="contenido">
        <h2 id="tituloCont">Acerca de:</h2>
        <p class="parrafoCont">Soy un estudiante de ingeniería en informática, muy responsable ,creativo y autodidacta.
          No tengo miedo a la
          hora de aprender algo nuevo, me encanta innovar y aportar nuevas ideas, esa es una de las tantas cosas
          que me motiva a llegar a trabajar en el área de desarrollo de software.</p>
        <div class="tecnologias">
          <h2 id="tituloCont">Tecnologías:</h2>
          <div class="contenedorImages">
            <div>
              <img class="imageTech" src="/imagenes/angularTS.png" alt="">
            </div>
            <div>
              <img class="imageTech" src="/imagenes/css3.png" alt="">
            </div>
            <div>
              <img class="imageTech" src="/imagenes/html5.png" alt="">
            </div>
            <div>
              <img class="imageTech" src="/imagenes/javascript.png" alt="">
            </div>

          </div>
        </div>
      </div>

      <div class="presentacion">
        <div class="contImg">
          <img class="img" src="/imagenes/perfil3.png" alt="">
        </div>
        <div class="datosContacto">
          <a class="linkedin" href="http://www.linkedin.com/in/gustavo-sobarzo-novoa-28ab99107" target="_blank"><i
              class="material-icons" id="link">link</i>Linkedin</a>
          <a class="linkedin" href="" target="_blank"><i class="material-icons" id="gps">location_on</i>Chile</a>
          <a class="linkedin" href="" target="_blank" id="email"><i class="material-icons"
              id="emailicon">email</i>gustavo.a.sobarzo@gmail.com</a>
          <a class="linkedin" href="" target="_blank"><i class="material-icons"
              id="phone">phone_iphone</i>+569-62715935</a>
        </div>

        <div class="certificados">
          <h2>FORMACIÓN</h2>
          <p class="universidad">Universidad Tecnológica de Chile:</p>
          <p class="linkedin">- Analista Programador</p>
          <p class="linkedin">- Ingeniería en Informática</p>
          <p class="universidad">Cursos:</p>
          <p class="linkedin">- JavaScript de Cero a Experto</p>
          <p class="linkedin">- Angular de Cero a Experto</p>
        </div>
      </div>
    </div>

  </div>

  <div class="appPresupuesto">
    <h1>Aplicación presupuesto</h1>
  </div>

  <div id="footer"></div>

  <script>
    /*Cargamos footer.hmtl mediante la funcion load de JS asignando un id a la etiqueta a renderizar*/
    $(function () {
      $("#footer").load("headFooter/footer.html");
    });
  </script>
  <script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>

  <script src="/app/js/Cliente.js"></script>
  <script src="/app/js/app.js"></script>
</body>

</html>