/* Gustavo Souza Santana
26) Ler estoque atual, máximo e mínimo, calcular a média e informar se deve efetuar compra.*/

alert("Programa Calculo Para Efetuar Compra")

var quantidade_Atual = parseFloat(prompt("Quantidade atual em estoque: "));
var quantidade_Max = parseFloat(prompt("Quantidade máxima em estoque: "));
var quantidade_Min = parseFloat(prompt("Quantidade mínima em estoque: "));

var quantidade_Media = (quantidade_Max + quantidade_dMin) / 2;

if (quantidade_Atual >= quantidade_Media) {
    alert("Não efetuar compra");
} else {
    alert("Efetuar compra");
}