 // Exercício 2) Elabore um algoritmo que calcule a área de um
//círculo qualquer de raio fornecido.
//código node para iniciação ts-node Exercício2.ts

import * as entrada from 'readline-sync';

function calcCirculo(raio: number): number {
    const area = Math.PI * Math.pow(raio, 2);
    return area;
}

function main() {
    const raio = parseFloat(entrada.question("Digite seu raio do circulo: "));
    const area = calcCirculo(raio);
    console.log(`A area do círculo ${raio} é ${area.toFixed(2)}.`);
}

main();
