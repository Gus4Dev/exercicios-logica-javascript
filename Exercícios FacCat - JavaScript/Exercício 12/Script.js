/* Gustavo Souza Santana
12) Ler temperatura em Fahrenheit, calcular e escrever em Celsius.  OBS: C/5 = F-32/9 */

alert("Programa Conversão de Celcius em Fahrenheit")

var temp_fahrenheit = parseFloat(prompt("Digite a temperatura em Fahrenheit: "));
var temp_celsius = ((temp_fahrenheit - 32) * 5) / 9;

alert("Temperatura em Fahrenheit: " + temp_fahrenheit);
alert("Temperatura em Celsius: " + temp_celsius);
