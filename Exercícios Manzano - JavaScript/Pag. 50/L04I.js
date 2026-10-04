/* Gustavo Souza Santana
exe: L04I */

// Programa: Maior e Menor Valor entre Números Positivos

alert("Programa de Leitura de Valores Positivos até Encontrar um Negativo");

var valor;
var maior, menor;
var primeiro = true;

do {
   valor = parseFloat(prompt("Digite um valor positivo (digite um negativo para encerrar): "));
   if (valor >= 0) {
      if (primeiro === true) {
         maior = valor;
         menor = valor;
         primeiro = false;
      } else {
         if (valor > maior) {
            maior = valor;
         }
         if (valor < menor) {
            menor = valor;
         }
      }
   }
} while (valor >= 0);

alert("O maior valor informado foi: " + maior);
alert("O menor valor informado foi: " + menor);