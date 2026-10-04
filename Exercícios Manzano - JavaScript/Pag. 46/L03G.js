/* Gustavo Souza Santana
exe: L03G */

// Programa: Série de Fibonacci até o 15º Termo

alert("Programa da Série de Fibonacci");

var termo1 = 1;
var termo2 = 1;
var proximo;
var contador = 2;
var resultado = termo1 + "\n" + termo2 + "\n";

while (contador < 15) {
   proximo = termo1 + termo2;
   resultado = resultado + proximo + "\n";
   termo1 = termo2;
   termo2 = proximo;
   contador = contador + 1;
}

alert(resultado);