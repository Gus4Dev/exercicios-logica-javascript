/* Gustavo Souza Santana
exe: L01F */

// Programa: Troca de Valores entre Duas Variáveis

alert("Programa de Troca de Valores entre Duas Variáveis");

var a = prompt("Digite o valor de A: ");
var b = prompt("Digite o valor de B: ");
var auxiliar;

auxiliar = a;
a = b;
b = auxiliar;

alert("Após a troca, A = " + a + " e B = " + b);