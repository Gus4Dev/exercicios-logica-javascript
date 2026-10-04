/* Gustavo Souza Santana 
8) Escreva um algoritmo para ler o número total de eleitores de um município, o número de votos 
brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total de eleitores.
*/

alert("Programa Eleições")

var totalEleitores = parseFloat(prompt("Digite o número total de eleitores: "));
var votosBrancos = parseFloat(prompt("Digite o número de Votos brancos: "));
var votosNulos = parseFloat(prompt("Digite o número de Votos nulos: "));
var votosValidos = parseFloat(prompt("Digite o número de Votos válidos: "));

var percentual_Brancos = (votosBrancos * 100) / totalEleitores;
var percentual_Nulos = (votosNulos * 100) / totalEleitores;
var percentual_Validos = (votosValidos * 100) / totalEleitores;

alert("Percentual dos votos brancos: " + percentual_Brancos + "%");
alert("Percentual dos votos nulos: " + percentual_Nulos + "%");
alert("Percentual dos votos válidos: " + percentual_Validos + "%");