/* Gustavo Souza Santana
13) Ler três notas, calcular e escrever a média ponderada (pesos 2, 3 e 5).*/

alert("Programa Media Ponderada")

var nota1 = parseFloat(prompt("Digite a primeira nota: "));
var nota2 = parseFloat(prompt("Digite a segunda nota: "));
var nota3 = parseFloat(prompt("Digite a terceira nota: "));
var mediaFinal = ((nota1 * 2) + (nota2 * 3) + (nota3 * 5)) / 10;

alert("Primeira nota: " + nota1);
alert("Segunda nota: " + nota2);
alert("Terceira nota: " + nota3);
alert("Média final: " + mediaFinal);