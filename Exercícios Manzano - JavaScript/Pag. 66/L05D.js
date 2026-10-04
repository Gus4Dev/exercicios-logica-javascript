/* Gustavo Souza Santana
exe: L05D */

// Programa: Somatório dos Valores Pares de 1 até 500

alert("Programa de Somatório dos Valores Pares de 1 até 500");

var soma = 0;

for (var numero = 1; numero <= 500; numero = numero + 1) {
   if (numero % 2 === 0) {
      soma = soma + numero;
   }
}

alert("O somatório dos valores pares é: " + soma);