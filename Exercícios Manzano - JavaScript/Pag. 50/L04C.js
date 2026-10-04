/* Gustavo Souza Santana
exe: L04C */

// Programa: Números Divisíveis por 4 Menores que 200

alert("Programa de Apresentação dos Números Divisíveis por 4");

var numero = 1;
var resultado = "";

do {
   if (numero % 4 === 0) {
      resultado = resultado + numero + "\n";
   }
   numero = numero + 1;
} while (numero < 200);

alert(resultado);