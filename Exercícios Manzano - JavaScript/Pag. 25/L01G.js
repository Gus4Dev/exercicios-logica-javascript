/* Gustavo Souza Santana
exe: L01G */

// Programa: Soma e Multiplicação com Propriedade Distributiva

alert("Programa de Soma e Multiplicação com Propriedade Distributiva");

var a = parseFloat(prompt("Digite o valor de A: "));
var b = parseFloat(prompt("Digite o valor de B: "));
var c = parseFloat(prompt("Digite o valor de C: "));
var d = parseFloat(prompt("Digite o valor de D: "));

var somaAB = a + b;
var somaAC = a + c;
var somaAD = a + d;
var somaBC = b + c;
var somaBD = b + d;
var somaCD = c + d;

var multAB = a * b;
var multAC = a * c;
var multAD = a * d;
var multBC = b * c;
var multBD = b * d;
var multCD = c * d;

alert("Soma A+B = " + somaAB);
alert("Soma A+C = " + somaAC);
alert("Soma A+D = " + somaAD);
alert("Soma B+C = " + somaBC);
alert("Soma B+D = " + somaBD);
alert("Soma C+D = " + somaCD);

alert("Multiplicação A*B = " + multAB);
alert("Multiplicação A*C = " + multAC);
alert("Multiplicação A*D = " + multAD);
alert("Multiplicação B*C = " + multBC);
alert("Multiplicação B*D = " + multBD);
alert("Multiplicação C*D = " + multCD);