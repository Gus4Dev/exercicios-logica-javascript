/* Gustavo Souza Santana
exe: L05G */

// Programa: Potências de 3 (Expoente de 0 a 15)

alert("Programa de Potências de 3");

var resultado = "";

for (var expoente = 0; expoente <= 15; expoente = expoente + 1) {
   var potencia = 1;
   for (var o = 1; o <= expoente; o = o + 1) {
      potencia = potencia * 3;
   }
   resultado = resultado + "3^" + expoente + " = " + potencia + "\n";
}

alert(resultado);