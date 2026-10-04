/* Gustavo Souza Santana
exe: L01D */

// Programa: Cálculo de Litros de Combustível Gastos em uma Viagem

alert("Programa de Cálculo de Litros de Combustível Gastos em uma Viagem");

var tempo = parseFloat(prompt("Digite o tempo gasto na viagem (em horas): "));
var velocidade = parseFloat(prompt("Digite a velocidade média (em Km/h): "));
var distancia = tempo * velocidade;
var litrosUsados = distancia / 12;

alert("Velocidade média: " + velocidade + " Km/h");
alert("Tempo gasto: " + tempo + " horas");
alert("Distância percorrida: " + distancia + " Km");
alert("Litros de combustível usados: " + litrosUsados + " litros");