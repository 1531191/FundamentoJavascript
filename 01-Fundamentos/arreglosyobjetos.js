/***********************
 * ARREGLOS EN JAVASCRIPT
 ***********************/

var nombre = ['Pablo', ' Juan', 'Aana'];
var vegetales = new Array('Tomate', 'Lechuga', 'Zanahoria');


console.log(nombre);

console.log(vegetales[1]);


nombre[1] = 'Carla';

console.log(nombre[1]);

vegetales[2] = 4;

console.log(vegetales[2]);

/********************
 * OPeraciones con Arreglos
 */

var frutas = ['pera', 'manzana', 'uva', 'sandia'];
console.log(frutas);

for (i = 0; i <= frutas.length - 1; i++) {
    console.log(frutas[i]);
}

frutas.forEach(function (elemento, indice, array) {
    console.log(elemento, indice);
});

// añadir al arreglo al final
frutas.push('naranja');
console.log(frutas);
frutas.unshift('fresa');
console.log(frutas);
frutas.pop();
console.log(frutas);
frutas.shift();
console.log(frutas);

var pos = frutas.indexOf('uva');
console.log(pos);

frutas.splice(1, 1);
console.log(frutas);


//ARREGLO CON ELEMENTOS DE DIFERENTES TIPOS

var persona = ['Pablo', 'Vasquez', 34, '999999999', 1.75];
console.log(persona);



/***************
 *  Objetos Literales
 */

var persona = {

    nombre: 'Pablo',
    apellido: 'Vasquez',
    gustos: ['Futbol ', 'Peliculas', 'Ingles'],
    trabajo: 'Instructor',
    esCasado: true
};

console.log(persona['nombre']);
console.log(persona.gustos);

persona.esCasado = false;
console.log(persona.esCasado);


/********************************
 * Objetos con la sintaxis Object
 *******************************/

var persona2 = new Object();
persona2.nombre = 'Ana';
persona2.apellido = 'Pinedo';
persona2['trabajo'] = 'WebDeveloper';

console.log(persona2);


/************************
 * Objetos y metodos
 ***********************/


var person = {
    //Propiedades
    nombre: 'Erick',
    apellido: 'Vasquez',
    gustos: ['Futbol ', 'Peliculas', 'Ingles'],
    trabajo: 'Instructor',
    esCasado: true,
    yearNacimiento : 1994,

    //Metodos
    calcularEdad: function () {
        this.edad =  2019 - this.yearNacimiento;

    }
};
    person.calcularEdad();
    console.log(person);
    