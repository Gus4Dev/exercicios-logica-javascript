/* Gustavo Souza Santana
22) Calcular o salário do funcionário com horas extras (jornada mensal de 160 horas) OBS: 50%.*/

alert("Programa Calculo Salario com Extras")

var horastrabalhadas = parseInt(prompt("Digite quantas horas foram trabalhadas no mês: "))
var salariohora = parseInt(prompt("Digite quanto horas você recebe por hora: "))

if (salariototal >= 160) {

    salariobase = 160 * salariohora

    horaextra = horastrabalhadas - 160
    salarioextras = horaextra * (salariohora * 1.5)

    salariototal = salariobase + salarioextras
    alert(`salario total: ${salariototal}, hora base ${horabase}, salario extra ${salarioextras}`)
}
else {
    salariototal = salariohora * horastrabalhadas
    alert(`salario total: ${salariototal}`)
}