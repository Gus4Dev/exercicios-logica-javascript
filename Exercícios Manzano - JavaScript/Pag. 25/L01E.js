/* Gustavo Souza Santana
exe: L01E */

// Programa: Cálculo do Valor de uma Prestação em Atraso

alert("Programa de Cálculo do Valor de uma Prestação em Atraso");

var valor = parseFloat(prompt("Digite o valor da prestação: "));
var taxa = parseFloat(prompt("Digite a taxa de juros (%): "));
var tempo = parseFloat(prompt("Digite o tempo de atraso: "));
var prestacao = valor + (valor * taxa / 100) * tempo;

alert("O valor da prestação com atraso é: " + prestacao);