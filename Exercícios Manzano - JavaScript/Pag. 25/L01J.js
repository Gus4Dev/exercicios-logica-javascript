/* Gustavo Souza Santana
exe: L01J */

// Programa: Conversão de Dólar para Real

alert("Programa de Conversão de Dólar para Real");

var cotacao = parseFloat(prompt("Digite o valor da cotação do dólar: "));
var dolares = parseFloat(prompt("Digite a quantidade de dólares: "));
var reais = dolares * cotacao;

alert("O valor em reais é: " + reais);