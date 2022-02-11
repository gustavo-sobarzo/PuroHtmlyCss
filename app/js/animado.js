
/*-------------------------animacion leer mas--------------------------------------------*/
// let verMas = (id) => {
//     if (id === 'mas') {
//         document.getElementById('desplegar').style.display = 'block';
//         document.getElementById('leerMas').style.display = 'none';
//         document.getElementById('leerMenos').style.display = 'block';
//     }
// }
// let verMenos = (id) => {
//     if (id === 'menos') {
//         document.getElementById('desplegar').style.display = 'none';
//         document.getElementById('leerMenos').style.display = 'none';
//         document.getElementById('leerMas').style.display = 'block';
//     }
// }
$(document).ready(function(){
    $("#leerMas").click(function(a){
        $("#desplegar").css("display", "block");
        $("#leerMas").css("display", "none")
        $("#leerMenos").css("display", "block")
        a.preventDefault();
    })
    $("#leerMenos").click(function(a){
        $("#desplegar").css("display", "none")
        $("#leerMas").css("display", "block")
        $("#leerMenos").css("display", "none")
        a.preventDefault();
    });
});
/*---------------------aumentar width al presionar leer mas-----------------------------------*/

$(document).ready(function () {
    $("#leerMas").click(function () {
        $("#java").addClass("aumentarWidth");
    });
    $("#leerMenos").click(function () {
        $("#java").removeClass("aumentarWidth");
    });
});

/*-----Formulario contacto Index-----------------------------*/
$(document).ready(function(){
    $("#email").click(function(a){
	    $(".contFormContact").css("display", "block"); 
        a.preventDefault();
    });
    $("#contactMeNow").click(function(){
        $(".contFormContact").css("display", "block")
    });
    $("#cancel").click(function(a){
        $(".contFormContact").css("display", "none");
        a.preventDefault();
    });
});