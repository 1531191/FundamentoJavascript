
function calcularEdad(yearNacimiento) {
    edad = 2019 - yearNacimiento
    return edad;
}

var edad = calcularEdad(1994);
console.log(edad)


//Ejercicio jubilacion


function jubilacion(yearNacimi, name) {

    var edadJubi = calcularEdad(yearNacimi)
    var jubi = 65 - edadJubi

    if (jubi > 65) {
        console.log("Se tiene que jubilar "+ name);
    } else {
        console.log("Todavia no se jubila " + name);
    }
}


