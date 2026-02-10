// Query Selector

const heading = document.querySelector('.header__texto h2') // 0 or 1 Elements
heading.textContent = 'Nuevo Heading';

console.log(heading);

// Query Selector All

const enlaces = document.querySelectorAll('.navegacion a');
console.log(enlaces[0]);

enlaces[0].textContent = 'New Text';

//enlaces[0].href = 'http://google.com';

enlaces[0].classList.add('nueva-clase');
//enlaces[0].classList.remove('navegacion__enlace');

// getElementById

const heading2 = document.getElementById('heading');
Console.log(heading2);

// Generar un nuevo enlance
const nuevoEnlace = document.createElement('A'); //Java recomienda en mayusc

// Agregar href
nuevoEnlace.href = 'nuevo-enlance.html';

// Agregar el texto
nuevoEnlace.textContent = 'Online Store';

// Agregar la clase
nuevoEnlance.classList.add('navegacion__enlance')

// Agregarlo al documento
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);

console.log(nuevoEnlace); // a


