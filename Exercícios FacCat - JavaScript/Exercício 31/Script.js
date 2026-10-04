/* Gustavo Souza Santana
31) Ler as medidas dos lados de um triângulo e informar se formam ou não um triângulo.*/

alert("Programa Leitura de Medidas de um triângulo")

var valor1 = parseFloat(prompt("Digite o lado A: "));

var valor2 = parseFloat(prompt("Digite o lado B: "));

var valor3 = parseFloat(prompt("Digite o lado C: "));

if (valor1 < valor2 + valor3) {

    if (valor2 < valor1 + valor3) {

        if (valor3 < valor1 + valor2) {

            alert("Formam um triângulo");

        } else {

            alert("Não formam um triângulo");

        }

    } else {

        alert("Não formam um triângulo");

    }

} else {

    alert("Não formam um triângulo");

}