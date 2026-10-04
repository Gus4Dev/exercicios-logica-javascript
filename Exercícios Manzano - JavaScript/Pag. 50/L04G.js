/* Gustavo Souza Santana
exe: L04G */

// Programa: Fatorial dos Valores Ímpares de 1 a 10

alert("Programa de Cálculo do Fatorial dos Valores Ímpares de 1 a 10");

var numero = 1;
var fatorial, o;
var resultado = "";

do {
   if (numero % 2 !== 0) {
      fatorial = 1;
      o = 1;
      while (o <= numero) {
         fatorial = fatorial * o;
         o = o + 1;
      }
      resultado = resultado + numero + "! = " + fatorial + "\n";
   }
   numero = numero + 1;
} while (numero <= 10);

alert(resultado);