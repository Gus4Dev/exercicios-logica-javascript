/* Gustavo Souza Santana
exe: L04A */

// Programa: Quadrados dos Números de 15 a 200

alert("Programa de Apresentação dos Quadrados dos Números de 15 a 200");

var numero = 15;
var resultado = "";

do {
   resultado = resultado + numero + "^2 = " + (numero * numero) + "\n";
   numero = numero + 1;
} while (numero <= 200);

alert(resultado);