/* Gustavo Souza Santana
37) Ler quantidade de morangos e maçãs, calcular o valor a pagar com desconto.*/

alert("Programa Fruteira")

var quantidade_Morango = parseFloat(prompt("Quantidade de morangos (Kg): "));
var quantidade_Maca = parseFloat(prompt("Quantidade de maçãs (Kg): "));
var precoMorango, precoMaca;

if (quantidade_Morango <= 5) {
   precoMorango = quantidade_Morango * 2.50;
} else {
   precoMorango = quantidade_Morango * 2.20;
}

if (qtdMaca <= 5) {
   precoMaca = quantidade_Maca * 1.80;
} else {
   precoMaca = quantidade_Maca * 1.50;
}

var total = precoMorango + precoMaca;
var totalKg = quantidade_Morango + quantidade_Maca;

if ((totalKg > 8) || (total > 25)) {
   total = total - (total * 0.10);
}

alert("Valor a pagar: " + total);