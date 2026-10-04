/* Gustavo Souza Santana
36) Ler idades de 2 homens e 2 mulheres, calcular soma do mais velho com a mais nova e produto do mais novo com a mais velha.*/

alert("Programa Produto das Idades")

var idadeHomem1 = parseInt(prompt("Idade do homem 1: "));
var idadeHomem2 = parseInt(prompt("Idade do homem 2: "));
var idadeMulher1 = parseInt(prompt("Idade da mulher 1: "));
var idadeMulher2 = parseInt(prompt("Idade da mulher 2: "));

var homemVelho, homemNovo, mulherVelha, mulherNova;

if (idadeHomem1 > idadeHomem2) {
    homemVelho = idadeHomem1;
    homemNovo = idadeHomem2;
} else {
    homemVelho = idadeHomem2;
    homemNovo = idadeHomem1;
}

if (idadeMulher1 > idadeMulher2) {
    mulherVelha = idadeMulher1;
    mulherNova = idadeMulher2;
} else {
    mulherVelha = idadeMulher2;
    mulherNova = idadeMulher1;
}

var soma = homemVelho + mulherNova;
var produto = homemNovo * mulherVelha;

alert("Soma: " + soma);
alert("Produto: " + produto);