/*Gustavo Souza Santana
32) Ler nome e gols de 2 times e escrever o nome do vencedor ou EMPATE.*/

alert("Programa Disputa Entre Times")

var nomeTime1 = prompt("Digite o nome do primeiro  time 1: ");
var golsTime1 = parseInt(prompt("Digite o número de Gols do time 1: "));
var nomeTime2 = prompt("Digite o nome do segundo time 2: ");
var golsTime2 = parseInt(prompt("Digite o número de Gols do time 2: "));

if (golsTime1 > golsTime2) {
    alert("Vencedor: " + nomeTime1);
} else {
    if (golsTime2 > golsTime1) {
        alert("Vencedor: " + nomeTime2);
    } else {
        alert("EMPATE");
    }
}