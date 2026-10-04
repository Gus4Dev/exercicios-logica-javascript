/* Gustavo Souza Santana
17) Ler duas notas, calcular a média e informar se o aluno foi aprovado.*/

alert("Programa Aprovação Aluno")

var nota1 = parseFloat(prompt("Digite a primeira nota: "));
var nota2 = parseFloat(prompt("Digite a segunda nota: "));
var media = (nota1 + nota2) / 2;

if (media >= 5) {
    alert("Aluno aprovado");
} else {
    alert("Aluno reprovado");
}

alert("A Média Final do aluno é: " + media);