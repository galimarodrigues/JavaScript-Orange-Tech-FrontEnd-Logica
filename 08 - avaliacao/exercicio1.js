// 1) Faça um programa que receba a média de um aluno.
// Caso a média seja < 5 imprima "Reprovado"
// Caso a média seja >= 5 e < 7 imprima "Recuperação"
// Caso a média seja >= 7 imprima "Aprovado"

//     Exemplo:
//         Entrada:
//             5.5
//         Saída:
//             Recuperação

const { gets, print } = require('./funcoes-auxiliares-ex1');

function classificarMedia(media) {
    if (media < 5) {
        return   'Reprovado';
    } else if (media >= 5 && media < 7) {
        return    'Recuperação';
    } else {
        return 'Aprovado'
    }
}

//Main
const media = [];
for (let i = 0; i < 1; i++) {
    const numberList = gets();
    media.push(numberList); 
}

print(media);
print((classificarMedia)(media));