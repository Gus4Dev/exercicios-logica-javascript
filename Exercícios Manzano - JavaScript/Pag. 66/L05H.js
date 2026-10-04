/* Gustavo Souza Santana
exe: L05H */

// Programa: Potência de uma Base Elevada a um Expoente

alert("Programa de Cálculo de Potência");

var base = parseFloat(prompt("Digite a base: "));
var expoente = parseInt(prompt("Digite o expoente: "));
var potencia = 1;

for (var contador = 1; contador <= expoente; contador = contador + 1) {
   potencia = potencia * base;
}

alert("O resultado de " + base + " elevado a " + expoente + " é: " + potencia);