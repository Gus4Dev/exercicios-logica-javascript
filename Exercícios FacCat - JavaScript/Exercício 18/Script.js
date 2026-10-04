/* Gustavo Souza Santana
18) Ler ano atual e ano de nascimento e informar se a pessoa pode votar.*/

alert("Programa Poder de votar")

var anoAtual = parseInt(prompt("Digite o ano atual: "));
var anoNascimento = parseInt(prompt("Digite o ano de nascimento: "));
var idade = anoAtual - anoNascimento;

if (idade >= 16) {
    alert("Pode votar este ano");
} else {
    alert("Não pode votar este ano");
}