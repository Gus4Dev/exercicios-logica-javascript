/* Gustavo Souza Santana
exe: L03D*/

// Programa: Valores Ímpares de 0 a 20

alert("Programa de Apresentação dos Valores Ímpares de 0 a 20");

var contador = 0;
var resultado = "";

while (contador <= 21) {
   if (contador % 2 !== 0) {
      resultado = resultado + contador + "\n";
   }
   contador = contador + 1;
}

alert(resultado);