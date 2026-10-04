/* Gustavo Souza Santana
exe: L05E */

// Programa: Valores Ímpares de 0 a 20

alert("Programa de Apresentação dos Valores Ímpares de 0 a 20");

var resultado = "";

for (var numero = 0; numero <= 20; numero = numero + 1) {
   if (numero % 2 !== 0) {
      resultado = resultado + numero + "\n";
   }
}

alert(resultado);