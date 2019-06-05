/***********************
 * ARREGLOS EN JAVASCRIPT
 ***********************/

 var nombre = ['Pablo' ,' Juan' , 'Aana'];
var vegetales = new Array('Tomate', 'Lechuga','Zanahoria');


console.log(nombre);

console.log(vegetales[1]);


nombre[1]= 'Carla';

console.log(nombre[1]);

vegetales[2] = 4;

console.log(vegetales[2]);

/********************
 * OPeraciones con Arreglos
 */

 var frutas = ['pera','manzana','uva','sandia'];
 console.log(frutas);

 for(i=0 ; i<= frutas.length -1 ; i++){
     console.log(frutas[i]);
 }

 frutas.forEach(function (elemento , indice , array){
     console.log(elemento , indice);
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

 frutas.splice(1,1);
 console.log(frutas);


 //ARREGLO CON ELEMENTOS DE DIFERENTES TIPOS

 var persona = ['Pablo', 'Vasquez', 34 , '999999999', 1.75];
 console.log(persona);