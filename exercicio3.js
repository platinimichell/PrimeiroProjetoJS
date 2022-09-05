const prompt = require("prompt-sync")()

idade = Number(prompt("Qual sua idade: "))

    switch ( idade ) {
        case 10:
        case 11:
        case 12:
        case 13:
        case 14: console.log("Infantil")
        break
        case 15:
        case 16:
        case 17: console.log("Juvenil")
        break
        case 18:
        case 19:
        case 20:
        case 21:
        case 22:
        case 23:
        case 24:
        case 25:
         console.log("Adulto jovem")
        break
        case 26:
        case 27:
        case 28:
        case 29:
        case 30:
        case 31:
        case 32:
        case 33:
        case 34:
        case 35: console.log("Adulto experiente")
        break
        case 36:
        case 37:
        case 38:
        case 39:
        case 40:
        case 41:
        case 42:
        case 43:
        case 44:
        case 45: console.log("Adulto sênior")
        break
        case 46:
        case 47:
        case 48:
        case 49:
        case 50: console.log("Jovem idoso")
        break
        default : console.log("Idoso")}