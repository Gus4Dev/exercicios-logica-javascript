/* Gustavo Souza Santana
33) Ler dois valores e informar se são iguais ou qual é o maior.*/

alert("Programa São Iguais ou Qual é Maior")

var valor1 = parseFloat(prompt("Digite o primeiro valor: "));
var valor2 = parseFloat(prompt("Digite o segundo valor: "));

if (valor1 == valor2) {
    alert("Números iguais");
} else {
    if (valor1 > valor2) {
        alert("Primeiro é maior");
    } else {
        alert("Segundo maior");
    }
}