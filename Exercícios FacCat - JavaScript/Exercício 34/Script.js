/* Gustavo Souza Santana
34) Transcrição do algoritmo dado e teste de mesa.*/

alert("Programa de Teste de Mesa")

var x = parseFloat(prompt("Digite X: "));
var y = parseFloat(prompt("Digite Y: "));
var resposta;

var z = (x * y) + 5;

if (z <= 0) {
    resposta = "A";
} else {
    if (z <= 100) {
        resposta = "B";
    } else {
        resposta = "C";
    }
}
A
alert("Z = " + z + " Resposta = " + resposta);

/*Teste de mesa:
X     Y     Z       Resposta
3     2     11      B
150   3     455     C
7     -1    -2      A
-2    5     -5      A
50    3     155     C
*/