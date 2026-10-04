/* Gustavo Souza Santana
exe: L04F */

// Programa: Soma, Média e Total de Valores Lidos até Encontrar um Negativo

alert("Programa de Leitura Sucessiva de Valores até Encontrar um Negativo");

var valor;
var soma = 0;
var quantidade = 0;
var media = 0;

do {
   valor = parseFloat(prompt("Digite um valor (digite um negativo para encerrar): "));
   if (valor >= 0) {
      soma = soma + valor;
      quantidade = quantidade + 1;
   }
} while (valor >= 0);

if (quantidade > 0) {
   media = soma / quantidade;
}

alert("O somatório dos valores é: " + soma);
alert("A média aritmética é: " + media);
alert("O total de valores lidos é: " + quantidade);