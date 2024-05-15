// Exercício 1) Construa um algoritmo que calcule a média ponderada entre
//5 números quaisquer, sendo que os pesos a serem aplicados são
//1, 2, 3, 4 e 5 respectivamente.
//código node para iniciação ts-node Exercício1.ts

import * as entrada from 'readline-sync';

function main() {
    let notas = 0;
    let pesos = 0;

    for (let i = 1; i <= 5; i++) {
        const num = parseFloat(entrada.question(`Digite o num ${i}: `));
        notas += num * i;
        pesos += i;
    }

    const media = notas / pesos;
    console.log(`A media: ${media.toFixed(2)}`);
}

main();
