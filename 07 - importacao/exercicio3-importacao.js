/*3) Faça um programa que receba a quantidade de números e seus respectivos valores.
Imprima todos os números pares.
Exemplo:
    Entrada:
        5
        1
        3
        9
        10
        12

    Saída:
        Números Pares: 10, 12*/

const { gets, print } = require('./exercicio3-auxiliar');

const numberList = [];
for (let i = 0; i < 6; i++) {
    const numbers = gets();
    numberList.push(numbers);
}

for (let i = 0; i < numberList.length; i++) {
    const number = numberList[i];
    if (number % 2 === 0) {
        print(number);
    }
}