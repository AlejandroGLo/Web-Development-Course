// querySelector - Returns none or up to 1 element that matches the selector

const heading = document.querySelector(".header__texto h2"); //0 or 1 elements
heading.textContent = "Nuevo Heading";
console.log(heading);


// querySelectorAll - Returns none or up to all elements that matches the selector

const enlaces = document.querySelectorAll(".navegacion a");
console.log(enlaces); //(enlaces[0] -> Nos muestra el primer enlace)
enlaces[0].textContent = "Nuevo Enlace";
enlaces[0].classList.add('nueva-clase');
// enlaces[0].classList.remove('navegacion__enlace');

// getElementById old way

//const heading2 = document.getElementById("heading");
//console.log(heading2);

// Generar un nuevo enlace

const nuevoEnlace = document.createElement('a');

//agregar href

nuevoEnlace.href = "nuevo-enlace.html";

//agregar texto

nuevoEnlace.textContent = "Tienda Online";

//agregar la clase

nuevoEnlace.classList.add('navegacion__enlace');

//agregarlo al documento

const navegacion = document.querySelector('.navegacion');

navegacion.appendChild(nuevoEnlace);

console.log(nuevoEnlace);


// Eventos

console.log(1);

window.addEventListener('load', function () { //load espera a que el js y los archivos que dependen del html esten listos

    console.log(2);
});


document.addEventListener('DOMContentLoaded', function () { //solo espera a que el html este listo, pero no espera al css o imagenes
    console.log(3);
});

console.log(5);

// window.onscroll = function () {
//     console.log("Scrolleando...");
// }

// Seleccionar elementos y asociarles un evento

// const btnEnviar = document.querySelector('.boton--primario');
// btnEnviar.addEventListener('click', function (e) {
//     console.log(e);
//     e.preventDefault(); //Evita que el formulario se envie

//     //Validar formulario


//     console.log('enviando formulario...');
// })

//Eventos de los inputs y textarea

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

formulario.addEventListener('submit', function (e) {
    console.log(e);
    e.preventDefault(); //Evita que el formulario se envie

    //Validar formulario
    const { nombre, email, mensaje } = datos;

    if (nombre === '' || email === '' || mensaje === '') {
        mostrarAlerta('Todos los campos son obligatorios', true);
        return; //Detiene la ejecucion del codigo
    }
    //crear alerta de exito
    mostrarAlerta('Mensaje enviado correctamente', false);

    //Limpiar formulario
    datos.nombre = '';
    datos.email = '';
    datos.mensaje = '';

    formulario.reset();
})


function leerTexto(e) {
    //console.log(e.target.value);

    datos[e.target.id] = e.target.value;

    // console.log(datos);
}

function mostrarAlerta(mensaje, error = null) {
    const alerta = document.createElement('p');
    alerta.textContent = mensaje;


    if (error) {
        alerta.classList.add('error');
    } else {
        alerta.classList.add('exito');
    }

    formulario.appendChild(alerta);

    //Eliminar la alerta despues de 3 segundos
    setTimeout(function () {
        alerta.remove();
    }, 3000);
}

// //Error en pantalla
// function mostrarError(mensaje) {
//     const error = document.createElement('p');
//     error.textContent = mensaje;
//     error.classList.add('error');

//     formulario.appendChild(error);

//     //Eliminar la alerta despues de 3 segundos
//     setTimeout(function () {
//         error.remove();
//     }, 3000);
// }

// //Mensaje de envio
// function mostrarExito(mensaje) {
//     exito.classList.add('exito');

//     formulario.appendChild(exito);

//     //Eliminar la alerta despues de 3 segundos
//     setTimeout(function () {
//         exito.remove();
//     }, 3000);
// }