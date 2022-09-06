const prompt = require("prompt-sync")()

total = 0

do { console.log("Digite um número qualquer: ")
    num = Number(prompt())
    total += num
} while ( num != 0 )

console.log(`Soma: ${total}`)