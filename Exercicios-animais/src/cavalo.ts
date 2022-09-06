import { Animal } from "./animal";

export class Cavalo implements Animal{
    nome: string
    idade: number

    constructor(
        nome: string,
        idade: number
    ){
        this.nome = nome
        this.idade = idade
    }

    emitirSom(): void {
        console.log("Relinchando")
    }
    
    locomocao(): void {
        console.log("Galopando")
    }
    
}