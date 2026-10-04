/* Gustavo Souza Santana
11) Calcular o salário final do vendedor (fixo + comissão por carro + 5% das vendas).
*/

alert("Programa Caluculo Salario Final De Vendedor")

let numeroCarros = parseInt(prompt("Digite o número de carros vendidos: "));
let valorVendas = parseFloat(prompt("Digite o valor total das vendas: "));
let salarioFixo = parseFloat(prompt("Digite o salário fixo: "));
let valorPorCarro = parseFloat(prompt("Digite o valor recebido por carro vendido: "));

let comissaoCarros = numeroCarros * valorPorCarro;
let percentualVendas = (valorVendas * 5) / 100;
let salarioFinal = salarioFixo + comissaoCarros + percentualVendas;

alert("Salário fixo: R$ " + salarioFixo);
alert("Comissão por carros vendidos: R$ " + comissaoCarros);
alert("5% sobre o valor das vendas: R$ " + percentualVendas);
alert("Salário final: R$ " + salarioFinal);

