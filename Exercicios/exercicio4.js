const prompt = require("prompt-sync")()

num = Number(prompt("Digite um número: "))

result = num % 2
raiz = Math.sqrt(num)
pot = Math.pow(num,2)


if ( result == 0 ) {
    console.log(`O número ${num} é par e sua raiz quadrada é ${raiz.toFixed(2)} .`)
} else {
    console.log(`O número ${num} é ímpar e elevado ao quadrado é ${pot.toFixed(2)} .`)
}