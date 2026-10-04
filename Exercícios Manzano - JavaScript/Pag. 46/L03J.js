/* Gustavo Souza Santana
exe: L03J */

// Programa: Soma e Média dos Valores Pares de 50 a 70

alert("Programa de Soma e Média dos Valores Pares de 50 a 70");

var numero = 50;
var soma = 0;
var quantidade = 0;

while (numero <= 70) {
   if (numero % 2 === 0) {
      soma = soma + numero;
      quantidade = quantidade + 1;
   }
   numero = numero + 1;
}

var media = soma / quantidade;

alert("A soma dos valores pares é: " + soma);
alert("A média aritmética é: " + media);