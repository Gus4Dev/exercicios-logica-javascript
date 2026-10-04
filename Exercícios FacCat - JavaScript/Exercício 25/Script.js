/* Gustavo Souza Santana
25) Ler número da conta, saldo, débito e crédito, calcular o saldo atual e informar se é positivo ou negativo.*/

alert("Programa Situação Saldo da Conta")

var numeroConta = parseInt(prompt("Número da conta: "));
var saldo = parseFloat(prompt("Saldo: "));
var debito = parseFloat(prompt("Débito: "));
var credito = parseFloat(prompt("Crédito: "));

var saldoAtual = saldo - debito + credito;

if (saldoAtual >= -1) {
    alert("Saldo Positivo");
} else {
    alert("Saldo Negativo");
}