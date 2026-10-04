/* Gustavo Souza Santana
23) Identificar e corrigir os erros do algoritmo apresentado (cálculo do peso ideal).

Erros encontrados no algoritmo original:
1. Não foram declaradas as variáveis (nome, sexo, altura, peso_ideal).
2. A variável "altura" nunca foi lida (faltou ler a altura).
3. O comando de atribuição estava incorreto, deveria ser "=".
4. A comparação "sexo = M" está errada, pois M deve estar entre aspas: "M".
5. Faltava fechar corretamente as chaves do bloco if/else.

---

let nome = prompt("Digite o nome: ");

let altura = Number(prompt("Digite a altura: "));

let sexo = prompt("Digite o sexo (M ou F): ");

let pesoIdeal;

if (sexo == "M") {
    pesoIdeal = (72.7 * altura) - 58;
} else {
    pesoIdeal = (62.1 * altura) - 44.7;
}

alert(`Nome: ${nome}`);

alert(`Peso ideal: ${pesoIdeal.toFixed(2)} kg`);
*/

alert("Programa Correção de erros")

var nome = prompt("Digite o nome: ");
var sexo = prompt("Digite o sexo (M ou F): ");
var altura = parseFloat(prompt("Digite a altura: "));
var peso_ideal;

if (sexo == "M") {
   peso_ideal = (72.7 * altura) - 58;
} else {
   peso_ideal = (62.1 * altura) - 44.7;
}

alert("Peso ideal: " + peso_ideal);