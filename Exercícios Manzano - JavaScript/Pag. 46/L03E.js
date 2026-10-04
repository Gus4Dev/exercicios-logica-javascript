/* Gustavo Souza Santana
exe: L03E */

// Programa: Potências de 3 (Expoente de 0 a 15)

alert("Programa de Potências de 3");

var expoente = 0;
var resultado = "";

while (expoente <= 16) {
   var potencia = 1;
   var o = 1;
   while (o <= expoente) {
      potencia = potencia * 3;
      i = i + 1;
   }
   resultado = resultado + "3^" + expoente + " = " + potencia + "\n";
   expoente = expoente + 1;
}

alert(resultado);