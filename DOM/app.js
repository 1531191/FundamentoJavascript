//Examinando el DOM


//console.dir(document);

console.log(document.title);
document.title = 'Prueba';
console.log(document.title);
console.log(document.head);
console.log(document.body);
console.log(document.all[10]);
console.log(document.forms[0]);
console.log(document.images);
console.log(document.links);


/************************
 * getElementByID
 *********************/

//console.log(document.getElementById('header-title'));
var headerTitle = document.getElementById('header-title');
var header = document.getElementById('main-header');
//console.log(header);
headerTitle.textContent = 'Alex';
headerTitle.innerText = 'Fer';
headerTitle.innerHTML = '<h1>Prueba</h1>';



/*********************
 * getElementsByClassName
 ***********************/

var items = document.getElementsByClassName('list-group-item');
console.log(items[1]);

items[2].textContent = 'Prueba';


/***********************
 *  getElementsByTagName
 *********************/

 var items1 = document.getElementsByTagName('li');
 items1[0].textContent = 'Prueba 02';
