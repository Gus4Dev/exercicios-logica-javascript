/* Gustavo Souza Santana
9) Ler salário atual e percentual de reajuste, calcular o novo salário.*/

alert("Programa Reajuste de Salario")

var salarioAtual = parseFloat(prompt("Salário atual: "));
var percentualReajuste = parseFloat(prompt("Percentual de reajuste: "));
var novoSalario = salarioAtual + (salarioAtual * percentualReajuste ) / 100;

alert("Novo salário: " + novoSalario);
alert("Salário atual: R$" + salarioAtual);
alert("Percentual de reajuste: " + percentualReajuste );
alert("Valor do reajuste: R$" + valorReajuste);