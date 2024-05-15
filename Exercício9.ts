//Exercício 9) Escreva o signo do zodiaco correspondente ao dia e més informado.
//código node para iniciação ts-node Exercício9.ts
import * as entrada from 'readline-sync';

function obterSigno(dia: number, mes: number): string {
    switch (mes) {
        case 1:
            return dia <= 20 ? "Capricornio" : "Aquario";
        case 2:
            return dia <= 18 ? "Aquario" : "Peixes";
        case 3:
            return dia <= 20 ? "Peixes" : "Aries";
        case 4:
            return dia <= 19 ? "Aries" : "Touro";
        case 5:
            return dia <= 20 ? "Touro" : "Gemeos";
        case 6:
            return dia <= 20 ? "Gemeos" : "Cancer";
        case 7:
            return dia <= 22 ? "Cancer" : "Leao";
        case 8:
            return dia <= 22 ? "Leao" : "Virgem";
        case 9:
            return dia <= 22 ? "Virgem" : "Libra";
        case 10:
            return dia <= 22 ? "Libra" : "Escorpiao";
        case 11:
            return dia <= 21 ? "Escorpiao" : "Sagitario";
        case 12:
            return dia <= 21 ? "Sagitario" : "Capricornio";
        default:
            return "Esse mes nao e valido!!";
    }
}

function main() {
    const dia = Number(entrada.question("Digite o dia do seu aniversario: "));
    const mes = Number(entrada.question("Digite o numero do seu mes: "));
    const signo = obterSigno(dia, mes);
    console.log(`Seu signo deve ser: ${signo}`);
}

main();
