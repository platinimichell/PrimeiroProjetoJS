import { Preguica } from "./src/preguica";
import { Cachorro } from "./src/cachorro";
import { Cavalo } from "./src/cavalo";

let preguica = new Preguica("Sid", 15)
let cachorro = new Cachorro("Caramelo", 5)
let cavalo = new Cavalo("Pangaré", 10)

console.log(preguica.nome)
console.log(preguica.idade)
preguica.locomocao()
preguica.emitirSom()

console.log("\n")

console.log(cachorro.nome)
console.log(cachorro.idade)
cachorro.locomocao()
cachorro.emitirSom()

console.log("\n")

console.log(cavalo.nome)
console.log(cavalo.idade)
cavalo.locomocao()
cavalo.emitirSom()