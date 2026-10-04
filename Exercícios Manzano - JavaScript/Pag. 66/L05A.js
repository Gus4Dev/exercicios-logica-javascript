/* Gustavo Souza Santana
exe: L05A */

// Programa: Quadrados dos Números de 15 a 200

alert("Programa de Apresentação dos Quadrados dos Números de 15 a 200");

var resultado = "";

for (var numero = 15; numero <= 200; numero = numero + 1) {
   resultado = resultado + numero + "^2 = " + (numero * numero) + "\n";
}

alert(resultado);