 // exercício 6) Um dado comerciante maluco cobra 10% de acréscimo para cada
//prestação em atraso e depois dá um desconto de 10% sobre esse valor.
// Faça um algoritmo que solicite o valor da prestação em atraso e
//apresente o valor final a pagar, assim como o prejuízo do
//comerciante na operação.
//código node para iniciação ts-node Exercício6.ts

import * as entrada from 'readline-sync';

function calcularVF(VP: number): [number, number] {
   
    const Acresc = VP * 1.1;

    
    const VF = Acresc * 0.9;

    
    const prejuizo = VF - VP;

    return [VF, prejuizo];
}

function main() {
    const VP = parseFloat(entrada.question("Digite o valor do atraso: "));

    const [VF, prejuizo] = calcularVF(VP);

    console.log(`O valor final a ser pago:  ${VF.toFixed(2)}.`);
    console.log(`O prejuizo do comerciante: ${prejuizo.toFixed(2)}.`);
}

main();
