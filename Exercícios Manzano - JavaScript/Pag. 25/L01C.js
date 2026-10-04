/* Gustavo Souza Santana
exe: L01C */

// Programa: Cálculo do Volume de uma Lata de Óleo

alert("Programa de Cálculo do Volume de uma Lata de Óleo");

var raio = parseFloat(prompt("Digite o raio da lata: "));
var altura = parseFloat(prompt("Digite a altura da lata: "));
var volume = Math.PI * raio * raio * altura;

alert("O volume da lata é: " + volume);