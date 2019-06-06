// querSelector solo selecciona al primero que encuentra

var header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px #ccc';

var input = document.querySelector('input');
input.value = 'Hola mundo';

/* 1 forma de entrar al form en un arreglo 
var form = document.querySelector('form');
form[1].value = 'Enviar';
form[1].style.borderBottom = 'solid 4px #ccc';
*/

var submit = document.querySelector('input[type= "submit"]');
submit.value = 'Enviar';


var item = document.querySelector('.list-group-item');
item.style.color = 'red';

//querySelectorAll

var items = document.querySelectorAll('.list-group-item');
items[3].style.color = 'red';

var titulos = document.querySelectorAll('.title');
console.log(titulos);
titulos[0].textContent = 'Prueba';


var impar = document.querySelectorAll('li:nth-child(odd)');
var par = document.querySelectorAll('li:nth-child(even)');
for(i = 0 ; i < impar.length ; i++){
    impar[i].style.backgroundColor = '#ccc';
    par[i].style.backgroundColor = '#f4f4f4'; 
}


