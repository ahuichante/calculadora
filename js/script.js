//Realizar una calculadora que permita obtener el promedio de la nota de 3 alumnos

// Pasarlos a numeros (Ingreso de datos
//      alumno 1 alumno 2 alumno 3)
// Hacer el promedio
// Entrega de datos

alert('Programa para calcular nota');

var nota1 = Number(prompt('Ingrese la nota'));
var nota2 = Number(prompt('Ingrese segunda nota'));
var nota3 = Number(prompt('Ingrese la tercer nota'));

promedio = (nota1 + nota2 + nota3) / 3;

document.write("<p class='script'>Este es el promedio de sus notas:  " + promedio + "</p>");