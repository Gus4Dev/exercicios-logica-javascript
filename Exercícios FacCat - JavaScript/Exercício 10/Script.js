/* Gustavo Souza Santana
10) Ler custo de fábrica de um carro e calcular o custo final ao consumidor (28% distribuidor + 45% impostos).*/

alert("Programa Caluculo Final Consumidor")

let custoFabrica = Number(prompt("Custo de fábrica: "));
let percentualDistribuidor = 28;
let percentualImpostos = 45;

let valorDistribuidor = (custoFabrica * percentualDistribuidor) / 100;
let valorImpostos = (custoFabrica * percentualImpostos) / 100;
let custoFinal = custoFabrica + valorDistribuidor + valorImpostos;

alert("Custo de fábrica: R$ " + custoFabrica);

alert("Valor do distribuidor: R$ " + valorDistribuidor);

alert("Valor dos impostos: R$ " + valorImpostos);

alert("Custo final ao consumidor: R$ " + custoFinal);