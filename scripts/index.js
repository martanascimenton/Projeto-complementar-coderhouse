
let nome = prompt("Digite seu nome:");
console.log("Olá, " + nome + "!");

let numero1 = prompt("Digite um número:");
numero1 = parseFloat(numero1);

if (!isNaN(numero1)) {
    
    let resultado = numero1 + 10;
  
    console.log("O resultado da soma de " + numero1 + " com 10 é: " + resultado);
} else {
    
    console.log("Por favor, digite um número válido.");
}

let texto1 = prompt("Digite um texto:");

let texto2 = prompt("Digite outro texto:");

let textoConcatenado = texto1 + " " + texto2;

alert("Os textos concatenados são: " + textoConcatenado);
