/* Gustavo Souza Santana
21) Ler hora de início e hora de fim de um jogo de xadrez e calcular a duração.*/

alert("Programa Tempo de Jogo Xadrez")

var horainicio = parseInt(prompt("Digite o valor que iniciou o jogo de xadrez: "))
var horafinal = parseInt(prompt("Digite o valor que finalizou o jogo de xadrez: "))

//O jogo começa hoje termina amanhã
if (horainicio >= horafinal) {
    duração /*(total)*/ = horafinal - horainicio + 24
}

//O jogo começa hoje e termina hoje
else {
    duração /*(total)*/ = horafinal - horainicio
}

alert(`Hora de início: ${horainicio}`)
alert(`Hora de fim: ${horafinal}`)
alert(`A duração da partida foi de ${duração} horas`)
