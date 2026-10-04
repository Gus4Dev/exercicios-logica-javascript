/* Gustavo Souza Santana
35) Ler litros vendidos e tipo de combustível, calcular o valor a pagar com desconto.
*/

alert("Programa Posto de Gasolina");

let litros = parseFloat(prompt("Litros vendidos: "));
let tipo = prompt("Tipo de combustível (A-álcool / G-gasolina): ");
let precoLitro;
let desconto;

if (tipo == "A") {

    precoLitro = 2.90;

    if (litros <= 20) {
        desconto = 0.03;
    } else {
        desconto = 0.05;
    }

} else {

    precoLitro = 3.30;

    if (litros <= 20) {
        desconto = 0.04;
    } else {
        desconto = 0.06;
    }
}

let valorPago = litros * precoLitro * (1 - desconto);

alert("Quantidade de litros: " + litros);
alert("Preço por litro: R$ " + precoLitro);
alert("Valor do desconto: R$ " + (litros * precoLitro * desconto));
alert("Valor a pagar: R$ " + valorPago);
