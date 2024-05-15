//Exercício 7) Escreva uma algoritmo que, a partir de um mês fornecido
//(número inteiro de 1 a 12).apresente o nome dele por extenso
//ou uma mensagem de mês inválido.
//código node para iniciação ts-node Exercício7.ts

import * as entrada from 'readline-sync';

function main() {
    const mes = parseInt(entrada.question("Digite o numero do mes  de 1 ao 12: "));
    const nome = nomeDoMes(mes);
    console.log(` ${mes} ${nome}`);
}

main();


function nomeDoMes(mes: number): string {
    switch (mes) {
        case 1:
            return "Janeiro";
        case 2:
            return "Fevereiro";
        case 3:
            return "Março";
        case 4:
            return "Abril";
        case 5:
            return "Maio";
        case 6:
            return "Junho";
        case 7:
            return "Julho";
        case 8:
            return "Agosto";
        case 9:
            return "Setembro";
        case 10:
            return "Outubro";
        case 11:
            return "Novembro";
        case 12:
            return "Dezembro";
        default:
            return "Mes invalido";
    }
}
