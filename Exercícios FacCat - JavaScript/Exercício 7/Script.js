/* Gustavo Souza Santana 
7) Faça um algoritmo que leia a idade de uma pessoa expressa em anos, meses e dias e escreva a idade 
dessa pessoa expressa apenas em dias. Considerar ano com 365 dias e mês com 30 dias. 
*/

alert("Programa Calculo de dias vividos") //Ou Programa Idade//

ano = parseInt(prompt("Digite a quantidade de anos vividos : "))
mes = parseInt(prompt("Digite a quantidade de meses passados do seu último aniversário : "))
dia = parseInt(prompt("Digite a quantidade de dias passados do seu último mesversário : "))
quantidadeDediasVividos = ano * 365 + mes *30 + dia
alert('A quantidade de dias vividos é : ${quantidadeDediasVividos}')