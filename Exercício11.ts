// Exercício 11) Construa um algoritmo que seja capaz de dar a classificação olimpica de 3 paises
//informados. Para cada pais é informado o nome, a quantidade de medalhas de ouro, prata
//e bronze. Considere que cada medalha de ouro tem peso 3, cada prata tem peso 2 cada
//bronze, peso 1.
//código node para iniciação ts-node Exercício11.ts

import * as entrada from 'readline-sync';

interface Pais {
    nome: string;
    ouro: number;
    prata: number;
    bronze: number;
}

const paises: Pais[] = [];

for (let i = 0; i < 3; i++) {
    const nome = entrada.question("Digite o nome: ");
    const ouro = Number(entrada.question("Quantidade de medalhas de ouro: "));
    const prata = Number(entrada.question("Quantidade de medalhas de prata: "));
    const bronze = Number(entrada.question("Quantidade de medalhas de bronze: "));
    const pais: Pais = { nome: nome, ouro: ouro, prata: prata, bronze: bronze };
    paises.push(pais);
}

console.log("Classificação Olímpica:");
paises.forEach(pais => {
    const pontos = pais.ouro * 3 + pais.prata * 2 + pais.bronze;
    console.log(`${pais.nome}: ${pontos} pontos`);
});
