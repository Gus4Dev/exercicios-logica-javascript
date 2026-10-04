/* Gustavo Souza Santana
exe: L03C */

// Programa: Somatório dos Valores Pares de 1 até 500

alert("Programa de Somatório dos Valores Pares de 1 até 500");

var contador = 1;
var soma = 0;

while (contador <= 500) {
   if (contador % 2 == 0) {
      soma = soma + contador;
   }
   contador = contador + 1;
}

alert("O somatório dos valores pares é: " + soma);