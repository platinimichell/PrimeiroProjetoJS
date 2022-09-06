import { Animal } from "./animal";

export class Preguica implements Animal{
    nome: string
    idade: number

    constructor(
        nome: string,
        idade: number
    ){
        this.nome = nome
        this.idade = idade
    }
    
    locomocao(): void {
        console.log("Subindo em ávores")
    }

    emitirSom(): void {
        console.log("Sons típicos de preguiça")
    }
}