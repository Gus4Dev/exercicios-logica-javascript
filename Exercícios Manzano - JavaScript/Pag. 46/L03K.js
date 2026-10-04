/* Gustavo Souza Santana
exe: L03K */

// Programa: Cálculo da Área Total de uma Residência

alert("Programa de Cálculo da Área Total de uma Residência");

var continuar = "SIM";
var areaTotal = 0;
var nomeComodo, largura, comprimento, area;

while (continuar === "SIM") {
   nomeComodo = prompt("Digite o nome do cômodo: ");
   largura = parseFloat(prompt("Digite a largura do cômodo: "));
   comprimento = parseFloat(prompt("Digite o comprimento do cômodo: "));
   area = largura * comprimento;
   areaTotal = areaTotal + area;

   alert("A área do cômodo " + nomeComodo + " é: " + area);

   continuar = prompt("Deseja continuar calculando outro cômodo? (SIM/NAO): ");
   continuar = continuar.toUpperCase();
}

alert("A área total da residência é: " + areaTotal);