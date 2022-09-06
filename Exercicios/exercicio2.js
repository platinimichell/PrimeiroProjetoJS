const prompt = require("prompt-sync")()

num1 = Number(prompt("Digite o 1º número: "))

num2 = Number(prompt("Digite o 2º número: "))

num3 = Number(prompt("Digite o 3º número: "))

if (num1 > num2) {
    numAux = num1;
    num1 = num2;
    num2 = numAux;
}

if (num2 > num3) {
    numAux = num2;
    num2 = num3;
    num3 = numAux;

}
if (num1 > num2) {
    numAux = num1;
    num1 = num2;
    num2 = numAux;
}

console.log(`A ordem crescente dos números é : ${num1}, ${num2}, ${num3}.`)