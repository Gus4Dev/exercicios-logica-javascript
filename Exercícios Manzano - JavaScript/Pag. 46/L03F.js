/* Gustavo Souza Santana
exe: L03F */

// Programa: Potência de uma Base Elevada a um Expoente

alert("Programa de Cálculo de Potência");

var base = parseFloat(prompt("Digite a base: "));
var expoente = parseInt(prompt("Digite o expoente: "));
var potencia = 1;
var contador = 1;

while (contador <= expoente) {
   potencia = potencia * base;
   contador = contador + 1;
}

alert("O resultado de " + base + " elevado a " + expoente + " é: " + potencia);