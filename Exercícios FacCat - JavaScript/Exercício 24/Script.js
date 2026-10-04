/* Gustavo Souza Santana
24) Calcular o salário total do vendedor com comissão progressiva sobre as vendas.*/

alert("Programa Calculo Salario por Comissão");

let salarioFixo = parseFloat(prompt("Salário fixo: "));
let valorVendas = parseFloat(prompt("Valor das vendas: "));

let comissao;

if (valorVendas <= 1500) {

    comissao = valorVendas * 0.03;

} else {

    comissao = (1500 * 0.03) + ((valorVendas - 1500) * 0.05);

}

let salarioTotal = salarioFixo + comissao;

alert("Salário fixo: R$ " + salarioFixo);
alert("Valor das vendas: R$ " + valorVendas);
alert("Comissão: R$ " + comissao);
alert("Salário total: R$ " + salarioTotal);