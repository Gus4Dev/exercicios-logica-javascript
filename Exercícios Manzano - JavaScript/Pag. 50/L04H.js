/* Gustavo Souza Santana
exe: L04H */

// Programa: Cálculo da Área Total de uma Residência

alert("Programa de Cálculo da Área Total de uma Residência");

var continuar;
var areaTotal = 0;
var nomeComodo, largura, comprimento, area;

do {
   nomeComodo = prompt("Digite o nome do cômodo: ");
   largura = parseFloat(prompt("Digite a largura do cômodo: "));
   comprimento = parseFloat(prompt("Digite o comprimento do cômodo: "));
   area = largura * comprimento;
   areaTotal = areaTotal + area;

   alert("A área do cômodo " + nomeComodo + " é: " + area);

   continuar = prompt("Deseja continuar calculando outro cômodo? (SIM/NAO): ");
   continuar = continuar.toUpperCase();
} while (continuar === "SIM");

alert("A área total da residência é: " + areaTotal);