/* Gustavo Souza Santana
exe: L01M */

// Programa: Quadrado da Soma de Três Valores

alert("Programa de Cálculo do Quadrado da Soma de Três Valores");

var a = parseFloat(prompt("Digite o valor de A: "));
var b = parseFloat(prompt("Digite o valor de B: "));
var c = parseFloat(prompt("Digite o valor de C: "));
var soma = a + b + c;
var resultado = soma * soma;

alert("O quadrado da soma é: " + resultado);