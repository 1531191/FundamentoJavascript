
var prueba = function(nombre){
    return 'Hola '+ nombre;
}

console.log(prueba('Alex'));


// Argumentos por default


var sumar = function ( a = 5 , b=7 , c=8){
    return a + b + c;
}
console.log(sumar());


//Plantilla de cadenas (template string)

var nombre = 'Pablo';

console.log(`El nombre es : ${nombre}`)