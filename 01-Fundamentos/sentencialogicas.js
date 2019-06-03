/***********
 * Operador if else
 */

var nombre = 'Pablo';
var edad = 98;

if (edad < 12) {
    console.log(nombre + " es un niño .")
} else if (edad > 11 && edad < 18) {
    console.log(nombre + " es un adolescente.")
} else if (edad > 17 && edad < 60) {
    console.log(nombre + " es un adulto .");
} else {
    console.log(nombre + " es un anciano .");
}


/***********
 * Operador ternario
 */


var nombre_a = 'Juan';
var edad = 19;

edad >= 18 ? console.log(nombre_a + ' es mayor de edad') : console.log(nombre_a + ' es menor de edad')


/***********
 * Sentencia Switch
 */


var mes = 3;

switch (mes) {
    case 1:
        console.log('Enero')
        break;
    case 2:
        console.log('Febrero')
        break;
    case 3:
        console.log('Marzo')
        break;
    default:
        console.log('Mes no confirmado')
        break;
}