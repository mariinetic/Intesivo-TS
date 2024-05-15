// Exercício 4) Ao completar o tanque de combustível de um automóvel,
// faça um algoritmo que calcule o consumo efetuado, assim como
// a autonomia que o carro ainda teria antes do abastecimento.
//Considere que o veículo sempre seja abastecido até encher o tanque
// e que são fornecidas apenas a capacidade do tanque, a quantidade de litros
//abastecidos e a quilometragem percorrida desde o último abastecimento.
//código node para iniciação ts-node Exercício4.ts

import * as entrada from 'readline-sync';

function calcularConsumoAutonomia(capacidade: number, abastecidos: number, KM: number): [number, number] {
    const consumo = abastecidos / KM;
    const autonomia = (capacidade - abastecidos) * consumo;
    return [consumo, autonomia];
}

function main() {
    const capacidade = parseFloat(entrada.question("Digite a capacidade do tanque em L "));
    const abastecidos = parseFloat(entrada.question("Digite a quantidade de litros abastecidos: "));
    const KM = parseFloat(entrada.question("Digite a quilometragem percorrida: "));

    const [consumo, autonomia] = calcularConsumoAutonomia(capacidade, abastecidos, KM);
    console.log(`Consumo efetuado: ${consumo.toFixed(2)} litros por KM.`);
    console.log(`Autonomia restante: ${autonomia.toFixed(2)} KM.`);
}

main();
