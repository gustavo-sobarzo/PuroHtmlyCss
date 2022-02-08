let animado = document.querySelectorAll(".btn_contenedor");

function mostrarScroll(){
    let scrollTop = document.documentElement.scrollTop;
    for(var i=0; i< animado.length; i++){
        let alturaAnimado = animado[i].offsetTop;
        if(alturaAnimado - 700< scrollTop){
            animado[i].style.opacity = 1;
        }
    }
}

window.addEventListener('scroll', mostrarScroll);


/*-------------------------animacion leer mas--------------------------------------------*/
let verMas = (id) => {
    if (id === 'mas') {
        document.getElementById('desplegar').style.display = 'block';
        document.getElementById('leerMas').style.display = 'none';
        document.getElementById('leerMenos').style.display = 'block';
    }
}
let verMenos = (id) => {
    if (id === 'menos') {
        document.getElementById('desplegar').style.display = 'none';
        document.getElementById('leerMenos').style.display = 'none';
        document.getElementById('leerMas').style.display = 'block';
    }
}