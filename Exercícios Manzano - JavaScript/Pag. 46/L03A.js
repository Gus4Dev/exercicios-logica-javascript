/* Gustavo Souza Santana
exe: L03A */

// Programa: Tabuada de Multiplicar usando ENQUANTO

alert("Programa de Tabuada de Multiplicar");

var numero = parseInt(prompt("Digite um número para ver a tabuada: "));
var contador = 1;
var resultado = "";

while (contador <= 10) {
   resultado = resultado + numero + " x " + contador + " = " + (numero * contador) + "\n";
   contador = contador + 1;
}

alert(resultado);