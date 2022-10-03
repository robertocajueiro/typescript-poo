import { Personagem } from './Personagem';
import { Priest } from './Priest';
import { Warrior } from './Warrior';
import { Mage } from './Mage';

let mage: Personagem = new Mage("Roberto mage");
let warrior: Personagem = new Warrior("Roberto warrior");
let priest: Personagem = new Priest("Roberto priest");

console.log("mage :>> ", mage);
console.log("warrior :>> ", warrior);
console.log("priest :>> ", priest);