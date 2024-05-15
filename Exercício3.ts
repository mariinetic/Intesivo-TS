//Exercício 3) Prepare um algoritmo capaz de inverter um número, de 3 digitos, fornecido, ou seja, 
//apresentar primeiro a unidade e, depois, a dezena e a centena
//código node para iniciação ts-node Exercício3.ts

import * as entradaSync from 'readline-sync';

function inverterNumero(numero: number): number {
    let inversao = 0;
    while (numero > 0) {
        const digito = numero % 10;
        inversao = (inversao * 10) + digito;
        numero = Math.floor(numero / 10);
    }
    return inversao;
}

const numOriginal = parseInt(entradaSync.question("Digite seu numero de 3 digitos: "));

if (numOriginal >= 100 && numOriginal <= 999) {
    const unidade = numOriginal % 10;
    const dezena = Math.floor((numOriginal % 100) / 10) * 10;
    const centena = Math.floor(numOriginal / 100) * 100;
    
    console.log(`Número original: ${numOriginal}`);
    console.log(`Unidade: ${unidade}`);
    console.log(`Dezena: ${dezena}`);
    console.log(`Centena: ${centena}`);
    
    const inversao = inverterNumero(numOriginal);
    console.log(`Invertido: ${inversao}`);
} else {
    console.log("Por favor, digite um numero de 3 digitos.");
}
