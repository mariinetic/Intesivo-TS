// Exercício 5) Dada uma determinada data de aniversário
//(dia, mês e ano separadamente), elabore um algoritmo que solicite
// a data atual (dia, mês e ano separadamente) e calcule a idade em.
//anos, em meses e em dias.
//código node para iniciação ts-node Exercício5.ts

import * as entrada from 'readline-sync';

function idade(Dnasc: number, Mnasc: number, Anasc: number, Datual: number, Matuall: number, ANOatual: number): [number, number, number] {
    let idadeano = ANOatual - Anasc;
    let idadeM = Matuall - Mnasc;
    let idadeD = Datual - Dnasc;

    if (idadeM < 0 || (idadeM === 0 && idadeD < 0)) {
        idadeano--;
        idadeM += 12;
    }
    if (idadeD < 0) {
        const anterior = new Date(ANOatual, Matuall - 1, 0).getDate();
        idadeD += anterior;
        idadeM--;
    }

    return [idadeano, idadeM, idadeD];
}

function main() {
    const Dnasc = parseInt(entrada.question("Digite seu dia de nascimento: "));
    const Mnasc = parseInt(entrada.question("Digite seu mes de nascimento: "));
    const Anasc = parseInt(entrada.question("Digite o ano de nascimento: "));
    
    const Datual = parseInt(entrada.question("Digite seu dia atual: "));
    const Matuall = parseInt(entrada.question("Digite seu mes atual: "));
    const ANOatual = parseInt(entrada.question("Digite seu ano atual: "));

    const [idadeano, idadeM, idadeD] = idade(Dnasc, Mnasc, Anasc, Datual, Matuall, ANOatual);

    console.log(`Idade: ${idadeano} anos, ${idadeM} meses e ${idadeD} dias.`);
}

main();
