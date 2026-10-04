/* Gustavo Souza Santana
exe: L01H */

// Programa: Cálculo do Volume de uma Caixa Retangular

alert("Programa de Cálculo do Volume de uma Caixa Retangular");

var comprimento = parseFloat(prompt("Digite o comprimento: "));
var largura = parseFloat(prompt("Digite a largura: "));
var altura = parseFloat(prompt("Digite a altura: "));
var volume = comprimento * largura * altura;

alert("O volume da caixa é: " + volume);