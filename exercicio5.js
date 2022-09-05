const prompt = require("prompt-sync")()

idade = 0
jovens = 0
idosos = 0

while ( idade != 99 ){
    idade = Number(prompt("Qual sua idade: "))
    if (idade <= 21 ){
        jovens++
    }
    if (idade >= 50){
        idosos++
    }
}
console.log(`Quantidade de pessoas que tem 21 anos ou menos: ${jovens}`)
console.log(`Quantidade de pessoas que tem 50 anos ou mais: ${idosos}`)