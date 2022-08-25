let pregunta = document.querySelectorAll('.pregunta');
let btnDropdown = document.querySelectorAll('.pregunta .more')
let respuesta = document.querySelectorAll('.respuesta');
let parrafo = document.querySelectorAll('.respuesta p');

for ( let i = 0; i < btnDropdown.length; i ++ ) {

    let altoParrafo = parrafo[i].clientHeight;
    let switchc = 0;

    btnDropdown[i].addEventListener('click', () => {

        if ( switchc == 0 ) {

            respuesta[i].style.height = `${altoParrafo}100%`;
            pregunta[i].style.marginBottom = '10px';
            btnDropdown[i].innerHTML = '<i>-</i>';
            switchc ++;

        }

        else if ( switchc == 1 ) {

            respuesta[i].style.height = `0`;
            pregunta[i].style.marginBottom = '0';
            btnDropdown[i].innerHTML = '<i>+</i>';
            switchc --;

        }

    })

}


const hamburguesa = document.querySelector('.hamburguesa');
const enlaces = document.querySelector('.navegacion__barra');

hamburguesa.addEventListener("click", () => {
    enlaces.classList.toggle("navegacion__barra__boton");
    
});

document.addEventListener("DOMContentLoaded", function(e){

    const parrafos = document.querySelectorAll('.descripcion');
 
     let alturas = [];
     let alturaMaxima = 0;
 
     const aplicarAlturas = ( function aplicarAlturas (){
         parrafos.forEach(parrafo => {
 
             if(alturaMaxima == 0){
                 alturas.push(parrafo.clientHeight);
             } else {
                 parrafo.style.height = alturaMaxima + "px";
             }
         });
         return aplicarAlturas;
     })();
 
     alturaMaxima = Math.max.apply (Math, alturas);
 
     aplicarAlturas ();
 
 });
 
