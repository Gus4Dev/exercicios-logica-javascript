/* Gustavo Souza Santana
27) Ler um valor e escrever se é positivo, negativo ou zero.*/

alert("Programa Positivo ou Negativo")

var valor = parseFloat(prompt("Digite um valor: "));

if (valor > 0) {
    alert("O valor é Positivo!");
} else {
    if (valor < 0) {
        alert("O valor é Negativo!");
    } else {
        alert("O valor é Zero!");
    }
}