//Selecciono todas las imágenes
var imagenes = $("img");
//Cuando el puntero entra en la imagen, añado la clase 'hover'
//La clase 'hover' tiene como estilo "pointer: crosshair"
// imagenes.on("mouseenter", function() {
//     $(this).addClass("hover")
// });
// //Cuando el puntero sale de la imagen, elimino la clase
// imagenes.on("mouseleave", function() {
//     $(this).removeClass("hover")
// });
// Esto hecho arriba, también podría hacerse con 'hover'

//La clase 'hover' tiene como estilo "pointer: crosshair"
imagenes.hover(function() {
    $(this).addClass("hover")
}, function() {
    $(this).removeClass("hover")
});

//Antes de nada, inicializamos unas variables para controlar la posición anterior, el desplazamento y la opacidad que tenía antes el elemento
var posicionAnteriorX = 0;
var desplazamientoX = 0;
var opacidadActual = 0;
//asignamos los valores iniciales a estas variables al colocar el puntero sobre el elemento
imagenes.mouseenter(function(event){
    posicionAnteriorX = event.pageX;
    opacidadActual = $(this).css("opacity");
    console.log(opacidadActual)
})
imagenes.mousemove(function(event){
    //El desplazamiento que hemos tenido es la posición actual - posición anterior
    var offset = event.pageX - posicionAnteriorX;
    //Actualizamos la posición anterior
    posicionAnteriorX = event.pageX;
    //Y sumamos el desplazamiento al desplazamiento global
    desplazamientoX += offset;
    //Calculamos la nueva opacidad del elemento
    //Se divide entre 100 puesto que el desplazamiento es en píxeles y nosotros queremos calcularlo cada 10
    //  además el desplazamiento son píxeles enteros y la opacidad es en intervalos de 0.1
    var opacidadNueva = parseFloat(opacidadActual) + desplazamientoX/100;
    //Asignamos la nueva opacidad
    $(this).css("opacity", opacidadNueva);
})
//Al salir del elemento, reseteamos las variables
imagenes.mouseleave(function(){
    posicionAnteriorX = 0;
    desplazamientoX = 0
    opacidadActual = 0;
})

//Similar al anterior
var posicionAnteriorY = 0;
var desplazamientoY = 0;
var altura = 0;
imagenes.mouseenter(function(event){
    posicionAnteriorY = event.pageY;
    altura = $(this).height()
})
imagenes.mousemove(function(event){
    var offset = posicionAnteriorY - event.pageY;
    posicionAnteriorY = event.pageY;
    desplazamientoY += offset;
    $(this).height(altura + desplazamientoY);
})
imagenes.mouseleave(function(){
    posicionAnteriorY = 0;
    desplazamientoY = 0
    altura = 0
})