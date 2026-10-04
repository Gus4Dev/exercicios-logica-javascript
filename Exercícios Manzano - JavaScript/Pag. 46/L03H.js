/* Gustavo Souza Santana
exe: L03H*/

// Programa: Conversão de Celsius para Fahrenheit (de 10 em 10 graus)

alert("Programa de Conversão de Celsius para Fahrenheit");

var celsius = 10;
var fahrenheit;
var resultado = "";

while (celsius <= 100) {
   fahrenheit = (9 * celsius + 160) / 5;
   resultado = resultado + celsius + " C = " + fahrenheit + " F\n";
   celsius = celsius + 10;
}

alert(resultado);