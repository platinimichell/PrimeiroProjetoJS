const prompt = require("prompt-sync")()

total = 0
qtd = 0

do {
    console.log("Digite qualquer número: ")
    num = Number(prompt())
    if ( num % 3 == 0 && num != 0 ){
        total += num
        qtd ++
    } 
} while (num != 0 )
    console.log(`Média dos números: ${total / qtd}`)