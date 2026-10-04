/* Gustavo Souza Santana
exe: L05I */

// Programa: Série de Fibonacci até o 15º Termo

alert("Programa da Série de Fibonacci");

var termo1 = 1;
var termo2 = 1;
var proximo;
var resultado = termo1 + "\n" + termo2 + "\n";

for (var contador = 2; contador < 15; contador = contador + 1) {
   proximo = termo1 + termo2;
   resultado = resultado + proximo + "\n";
   termo1 = termo2;
   termo2 = proximo;
}

alert(resultado);