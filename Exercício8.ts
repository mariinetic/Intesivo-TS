//Exercício 8) Elabore um algoritmo que, a partir de um dia, mês e ano fornecidos, valide se eles compõem uma data válida. 
//Não deixe de considerar os meses com 30 ou 31 dias, e o tratamento de ano bissexto.
//código node para iniciação ts-node Exercício8.ts

import * as entrada from 'readline-sync';
function main() {
    const dia = parseInt(entrada.question("Digite seu dia: "));
    const mes = parseInt(entrada.question("Digite seu mes: "));
    const ano = parseInt(entrada.question("Digite seu ano: "));

    const validadeDaData = DataValida(dia, mes, ano);
    console.log(`A data ${dia}/${mes}/${ano} ${validadeDaData}.`);
}

main();

function DataValida(dia: number, mes: number, ano: number): string {
    if (mes < 1 || mes > 12) {
        return "Esta data atualmente e invalida";
    }

    if (mes === 2) {
        if (ano % 4 === 0 && (ano % 100 !== 0 || ano % 400 === 0)) {
            return dia >= 1 && dia <= 29 ? "Esta data atualmente e valida" : "Esta data atualmente e invalida";
        } else {
            return dia >= 1 && dia <= 28 ? "Esta data atualmente e valida" : "Esta data atualmente e invalida";
        }
    } 
    else if ([4, 6, 9, 11].includes(mes)) {
        return dia >= 1 && dia <= 30 ? "Esta data atualmente e valida" : "Esta data atualmente e invalida";
    } 
    else {
        return dia >= 1 && dia <= 31 ? "Esta data atualmente e valida" : "Esta data atualmente e invalida";
    }
}

