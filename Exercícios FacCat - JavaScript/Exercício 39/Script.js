/* Gustavo Souza Santana
39) Para A = V, B = V e C = F, calcular o resultado das expressões lógicas. */

var a = true;
var b = true;
var c = false;

var resultadoA = (a && b) || (a !== b);
var resultadoB = (a || b) && (a && c);
var resultadoC = (a || (c && b)) !== (a && !b);

alert("a) (A e B) ou (A xou B) = " + resultadoA);
alert("b) (A ou B) e (A e C) = " + resultadoB);
alert("c) A ou C e B xou A e não B = " + resultadoC);