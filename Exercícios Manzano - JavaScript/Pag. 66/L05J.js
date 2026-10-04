/* Gustavo Souza Santana
exe: L05J */

// Programa: Conversão de Celsius para Fahrenheit (de 10 em 10 graus)

alert("Programa de Conversão de Celsius para Fahrenheit");

var fahrenheit;
var resultado = "";

for (var celsius = 10; celsius <= 100; celsius = celsius + 10) {
   fahrenheit = (9 * celsius + 160) / 5;
   resultado = resultado + celsius + " C = " + fahrenheit + " F\n";
}

alert(resultado);