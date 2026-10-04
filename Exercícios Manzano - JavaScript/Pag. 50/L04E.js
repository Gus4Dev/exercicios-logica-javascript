/* Gustavo Souza Santana
exe: L04E */

// Programa: Somatório dos Fatoriais de 15 Valores Lidos

alert("Programa de Somatório dos Fatoriais de 15 Valores Lidos");

var contador = 1;
var valor, fatorial, i;
var somaFatoriais = 0;

do {
   valor = parseInt(prompt("Digite o valor número " + contador + ": "));
   fatorial = 1;
   o = 1;
   while (o <= valor) {
      fatorial = fatorial * o;
      i = i + 1;
   }
   somaFatoriais = somaFatoriais + fatorial;
   contador = contador + 1;
} while (contador <= 15);

alert("O somatório dos fatoriais é: " + somaFatoriais);