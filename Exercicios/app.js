const prompt = require("prompt-sync")()

//Outout
//console.log("Olá Mundo!")

//Exemplo de um código em javascript
console.log("***Bem vinde***\n")

// const - contante ou let - delcarando uma variavel
let nome = prompt("Digite o seu nome: ")

let idade = Number(prompt("Digite a sua idade: "))

let altura = Number(prompt("Digite sua altura: "))

console.log(`Olá, meu nome é ${nome}, tenho ${idade} anos de idade e tenho ${altura} de altura.`)