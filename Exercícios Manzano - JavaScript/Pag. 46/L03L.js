/* Gustavo Souza Santana
exe: L03L */

// Programa: Maior e Menor Valor entre Números Positivos

alert("Programa de Leitura de Valores Positivos até Encontrar um Negativo");

var valor = parseFloat(prompt("Digite um valor positivo (digite um negativo para encerrar): "));
var maior = valor;
var menor = valor;

while (valor >= 0) {
   if (valor > maior) {
      maior = valor;
   }
   if (valor < menor) {
      menor = valor;
   }
   valor = parseFloat(prompt("Digite outro valor positivo (digite um negativo para encerrar): "));
}

alert("O maior valor informado foi: " + maior);
alert("O menor valor informado foi: " + menor);