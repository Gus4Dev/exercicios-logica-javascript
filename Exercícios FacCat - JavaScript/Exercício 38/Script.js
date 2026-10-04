/* Gustavo Souza Santana
exe: 38) Ler código de usuário e senha, validar acesso.*/

alert("Programa USER")

var codigo = parseInt(prompt("Digite o código do usuário: "));

if (codigo != 1234) {
    alert("Usuário inválido!");
} else {
    var senha = parseInt(prompt("Digite a senha: "));
    if (senha != 9999) {
        alert("Senha incorreta");
    } else {
        alert("Acesso permitido");
    }
}