/* Gustavo Souza Santana
exe: L03B */

// Programa: Soma dos Cem Primeiros Números Inteiros

alert("Programa de Soma dos Cem Primeiros Números Inteiros");

var contador = 1;
var soma = 0;

while (contador <= 100) {
   soma = soma + contador;
   contador = contador + 1;
}

alert("A soma dos cem primeiros números inteiros é: " + soma);