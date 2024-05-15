// Exercício 12) Construa um algoritmo que seja capaz de concluir qual dentre os seguintes animais foi
//e escolhido, através de perguntas e respostas. Animais possíveis: leão, cavalo, homem
//macaco, morcego, baleia, avestruz, pingum, pato, guia, tartaruga, crocodilo e cobra
//código node para iniciação ts-node Exercício12.ts

import * as entrada from 'readline-sync';

function SouN(pergunta: string): boolean {
    const resposta = entrada.question(`${pergunta} (S/N): `);
    return resposta.toLowerCase() === 's';
}

function adivinharAnimal(): string {
    const mamifero = SouN("mamifero?");
    if (mamifero) {
        const carnivoro = SouN("carnivoro?");
        if (carnivoro) {
            return "Leão";
        }
        const herbivoro = SouN("herbivoro?");
        if (herbivoro) {
            return "Cavalo";
        }
        return "Macaco";
    } 
    const ave = SouN("ave?");
    if (ave) {
        const voadora = SouN("voadora?");
        if (voadora) {
            const aquatica = SouN("aquatico?");
            if (aquatica) {
                return "Baleia";
            }
            return "Avestruz";
        }
        const nadadora = SouN("nadador?");
        if (nadadora) {
            return "Pato";
        }
        return "Pinguim";
    } 
    const reptil = SouN("reptil?");
    if (reptil) {
        const carnivororeptil = SouN("carnivoro?");
        if (carnivororeptil) {
            return "Crocodilo";
        }
        return "Cobra";
    }
    return "aguia";
}

console.log("Seu animal escolhido foi o", adivinharAnimal());