/* Gustavo Souza Santana
exe: L05K */

// Programa: Fatorial dos Valores Ímpares de 1 a 10

alert("Programa de Cálculo do Fatorial dos Valores Ímpares de 1 a 10");

var resultado = "";

for (var numero = 1; numero <= 10; numero = numero + 1) {
   if (numero % 2 !== 0) {
      var fatorial = 1;
      for (var i = 1; i <= numero; i = i + 1) {
         fatorial = fatorial * i;
      }
      resultado = resultado + numero + "! = " + fatorial + "\n";
   }
}

alert(resultado);