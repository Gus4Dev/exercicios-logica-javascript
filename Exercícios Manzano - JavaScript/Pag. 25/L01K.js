/* Gustavo Souza Santana
exe: L01K */

// Programa: Conversão de Real para Dólar

alert("Programa de Conversão de Real para Dólar");

var cotacao = parseFloat(prompt("Digite o valor da cotação do dólar: "));
var reais = parseFloat(prompt("Digite a quantidade de reais: "));
var dolares = reais / cotacao;

alert("O valor em dólares é: " + dolares);