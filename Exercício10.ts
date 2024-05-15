//exercício 10) A partir da idade informada de uma pessoa, elabore um algoritmo que informe a sua 
//classe eleitoral, sabendo que menores de 16 não votam (não votante), que o voto é obrigatório para adultos
// entre 18 e 65 anos (eleitor obrigatório) e que o voto é opcional para eleitores entre 16 e 18, 
//ou maiores de 65 anos (eleitor facultativo).
//código node para iniciação ts-node Exercício10.ts

import * as entrada from 'readline-sync';

function eleitor(idade: number): string {
    if (idade < 16) {
        return "Ola Voce é um Nao votante";
    } else if (idade >= 16 && idade < 18 || idade >= 65) {
        return "Ola Voce é um eleitor facultativo";
    } else {
        return "Ola Voce é um eleitor obrigatorio";
    }
}

    const usuario = Number(entrada.question("Por favor, insira sua idade: "));

console.log("Voce é um:",eleitor(usuario));