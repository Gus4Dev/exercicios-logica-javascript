/* Gustavo Souza Santana
16) Ler quantidade de maçãs e calcular o custo total (preço varia se compra menos ou mais de 1 dúzia).*/

alert("Programa Calculo Maçãs")

var quantidade_macas = parseInt(prompt("Digite a quantidade de maçãs compradas: "));

if (quantidade_macas >= 12) {
    preço = quantidade_macas * 1.00
    alert(`Você comprou ${quantidade_macas} maçãs por: R${preço}`)
}
else {
    preço = quantidade_macas *1.30
    alert(`Você comprou ${quantidade_macas} maçãs por: R${preço}`) 
}

