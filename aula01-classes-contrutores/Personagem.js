"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Energia, vida, ataque, defesa e nome
const prompt_sync_1 = __importDefault(require("prompt-sync"));
class Personagem {
    constructor(nome, energia, vida, ataque, defesa) {
        this.nome = nome;
        this.energia = energia;
        this.vida = vida;
        this.ataque = ataque;
        this.defesa = defesa;
    }
}
let sansa = new Personagem('Sansa Stark', 100, 40, 20, 20);
let teclado = (0, prompt_sync_1.default)();
let option = 0;
while (option != 9) {
    console.log('+============ Personagem ============+');
    console.log('|1. Treinar ataque                   |');
    console.log('|2. Treinar defesa                   |');
    console.log('|3. Imprimir atributos               |');
    console.log('|9. Sair                             |');
    console.log('|====================================|');
    option = +teclado('Escolha uma ação: ');
    switch (option) {
        case 1:
            sansa.ataque += 2;
            break;
        case 2:
            sansa.defesa += 3;
            break;
        case 3:
            console.log("sansa :>>", sansa);
            break;
        default:
            break;
    }
}
