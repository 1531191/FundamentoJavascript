function bienvenido() {

    return 'Hola bienvenido a la seccion de funciones';

}

var mensaje = bienvenido();
console.log(mensaje);

//Partes de una funcion
// entradas(argumento),codigo,salida(return)

function cuadradoNumero(num) {
    var resultado = num * num;
    return resultado;
}

var numero = 7;
var valor = cuadradoNumero(numero);
console.log(valor);
console.log(cuadradoNumero(5));

//Funcion que convierte de grados Fahrenheit a Celcius

// 32F = 0C , 68F = 20 C
// c = (f-32) * 5/ 9

function convertirFAHCelsius(gradoFah) {
    var celcius = (gradoFah - 32) * 5 / 9;
    return celcius;
}

var tempUno = convertirFAHCelsius(32);
var tempDos = convertirFAHCelsius(68);

console.log(tempUno);
console.log(tempDos);