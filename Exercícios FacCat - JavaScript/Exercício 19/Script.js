/* Gustavo Souza Santana
19) Ler dois valores (diferentes) e escrever o maior.*/

alert("Programa Valores Maiores")

var valor1 = parseFloat(prompt("Digite o primeiro valor: "));
var valor2 = parseFloat(prompt("Digite o segundo valor: "));

if (valor1 > valor2) {
    alert("O maior valor é: " + valor1);
} else {
    alert("O maior valor é: " + valor2);
}