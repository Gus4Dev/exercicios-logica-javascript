/* Gustavo Souza Santana
exe: L05C */

// Programa: Soma dos Cem Primeiros Números Inteiros

alert("Programa de Soma dos Cem Primeiros Números Inteiros");

var soma = 0;

for (var contador = 1; contador <= 100; contador = contador + 1) {
   soma = soma + contador;
}

alert("A soma dos cem primeiros números inteiros é: " + soma);