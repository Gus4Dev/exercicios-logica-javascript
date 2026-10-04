/* Gustavo Souza Santana
exe: L05F */

// Programa: Números Divisíveis por 4 Menores que 200

alert("Programa de Apresentação dos Números Divisíveis por 4");

var resultado = "";

for (var numero = 1; numero < 200; numero = numero + 1) {
   if (numero % 4 === 0) {
      resultado = resultado + numero + "\n";
   }
}

alert(resultado);