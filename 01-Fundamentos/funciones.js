function bienvenido() {

    return 'Hola bienvenido a la seccion de funciones';

}

var mensaje = bienvenido();
console.log(mensaje);


function cuadradoNumero(num) {
    var resultado = num * num;
    return resultado;
}

var numero = 7;
var valor = cuadradoNumero(numero);
console.log(valor);
console.log(cuadradoNumero(5));