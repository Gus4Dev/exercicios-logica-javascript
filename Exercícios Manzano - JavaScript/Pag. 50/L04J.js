/* Gustavo Souza Santana
exe: L04J */

// Programa: Divisão Inteira sem Utilizar o Operador DIV

alert("Programa de Cálculo da Divisão Inteira sem Operador DIV");

var dividendo = parseInt(prompt("Digite o valor do dividendo: "));
var divisor = parseInt(prompt("Digite o valor do divisor: "));
var quociente = 0;
var resto = dividendo;

do {
   resto = resto - divisor;
   quociente = quociente + 1;
} while (resto >= divisor);

alert("O resultado da divisão inteira é: " + quociente);