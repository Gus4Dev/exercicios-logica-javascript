/* Gustavo Souza Santana
exe: L03I */

// Programa: Leitura de 10 Valores, Soma e Média

alert("Programa de Leitura de 10 Valores, Soma e Média");

var contador = 1;
var valor;
var soma = 0;

while (contador <= 10) {
   valor = parseFloat(prompt("Digite o valor número " + contador + ": "));
   soma = soma + valor;
   contador = contador + 1;
}

var media = soma / 10;

alert("O somatório dos valores é: " + soma);
alert("A média aritmética é: " + media);