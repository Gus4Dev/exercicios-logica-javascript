/* Gustavo Souza Santana
exe: L04B */

// Programa: Somatório dos Valores Pares de 1 até 500

alert("Programa de Somatório dos Valores Pares de 1 até 500");

var numero = 1;
var soma = 0;

do {
   if (numero % 2 === 0) {
      soma = soma + numero;
   }
   numero = numero + 1;
} while (numero <= 500);

alert("O somatório dos valores pares é: " + soma);