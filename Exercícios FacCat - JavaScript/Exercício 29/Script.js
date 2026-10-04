/* Gustavo Souza Santana
29) Ler 3 valores (diferentes) e escrever a soma dos 2 maiores.
*/

alert("Programa 2 Maiores e Soma Dentro de 3 Valores");

let valor1 = parseFloat(prompt("Digite o primeiro valor: "));
let valor2 = parseFloat(prompt("Digite o segundo valor: "));
let valor3 = parseFloat(prompt("Digite o terceiro valor: "));
let soma;

if (valor1 < valor2) {
    if (valor1 < valor3) {
        soma = valor2 + valor3;
    } else {
        soma = valor1 + valor2;
    }
} else {
    if (valor2 < valor3) {
        soma = valor1 + valor3;
    } else {
        soma = valor1 + valor2;
    }
}

alert("A soma dos dois maiores valores é: " + soma);