import { Animal } from "./animal";

export class Cachorro implements Animal{
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
        console.log("Correndo atrás de motoqueiro")
    }

    emitirSom(): void {
        console.log("Latindo")
    }
}