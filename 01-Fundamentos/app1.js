// Ejercio de codificacion
// Se tien los siguientes datos .


var pesoLuis = 72;
var alturaLuis = 1.72;

var pesoCarlos = 89;
var alturaCarlos = 1.75;


var imcLuis = pesoLuis / (alturaLuis * alturaLuis);
var imcCarlos = pesoCarlos / (alturaCarlos * alturaCarlos);

console.log(" Indice de masa corporal Luis: " + imcLuis);
console.log(" Indice de masa corporal Carlos: " + imcCarlos);

var comparacion = imcCarlos > imcLuis;

console.log(comparacion);