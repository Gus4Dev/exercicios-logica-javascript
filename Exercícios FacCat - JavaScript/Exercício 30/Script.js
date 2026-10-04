/*Gustavo Souza Santana
30) Ler 3 valores (diferentes) e escrevê-los em ordem crescente.*/

alert("Programa Ordem Crescente 3 Valores ")

var valor1 = parseFloat(prompt("Digite o valor A: "));
var valor2 = parseFloat(prompt("Digite o valor B: "));
var valor3 = parseFloat(prompt("Digite o valor C: "));

if (valor1 < valor2) {
    if (valor2 < valor3) {
        alert(valor1 + " " + valor2 + " " + valor3);
    } else {
        if (valor1 < valor3) {
            alert(valor1 + " " + valor3 + " " + valor2);
        } else {
            alert(valor3 + " " + valor1 + " " + valor2);
        }
    }
} else {
    if (valor1 < valor3) {
        alert(valor2 + " " + valor1 + " " + valor3);
    } else {
        if (valor2 < valor3) {
            alert(valor2 + " " + valor3 + " " + valor1);
        } else {
            alert(valor3 + " " + valor2 + " " + valor1);
        }
    }
}