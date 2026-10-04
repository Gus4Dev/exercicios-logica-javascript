/* Gustavo Souza Santana
exe: L05B */

// Programa: Tabuada de Multiplicar

alert("Programa de Tabuada de Multiplicar");

var numero = parseInt(prompt("Digite um número para ver a tabuada: "));
var resultado = "";

for (var contador = 1; contador <= 10; contador = contador + 1) {
   resultado = resultado + numero + " x " + contador + " = " + (numero * contador) + "\n";
}

alert(resultado);