/* Gustavo Souza Santana
exe: L04D */

// Programa: Somatório de Grãos de Trigo em um Tabuleiro de Xadrez

alert("Programa de Cálculo de Grãos de Trigo no Tabuleiro de Xadrez");

var quadro = 1;
var graos = 1;
var totalGraos = 0;

do {
   totalGraos = totalGraos + graos;
   graos = graos * 2;
   quadro = quadro + 1;
} while (quadro <= 64);

alert("O total de grãos de trigo no tabuleiro é: " + totalGraos);