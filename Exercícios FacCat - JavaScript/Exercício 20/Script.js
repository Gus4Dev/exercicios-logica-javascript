/* Gustavo Souza Santana
20) Ler dois valores (diferentes) e escrevê-los em ordem crescente.*/

alert("Programa Ordem Crescente")

var valor1 = parseFloat(prompt("Digite o primeiro valor: "));
var valor2 = parseFloat(prompt("Digite o segundo valor: "));

if (valor1 < valor2) {
    alert("Ordem Crescente" + valor1 + " " + valor2);
} else {
    alert("Ordem Crescente" + valor2 + " " + valor1);
}