/*2) Faça um programa que receba a quantidade de números e seus respectivos valores. 
Imprima o maior e o menor número deste conjunto.

Exemplo:
    Entrada:
        4
        100
        150
        90
        200

    Saída:
        Maior número: 200
        Menor número: 90*/

const { gets, print } = require('./exercicio2-auxiliar.js');

const numbersInput = [];
for (let i = 0; i < 5; i++) {
    const numberList = gets();
    numbersInput.push(numberList);
}

let maiorNumero = 0;
let menorNumero = numbersInput[0];

for (let i = 0; i < numbersInput.length; i++) {
    const numberList = numbersInput[i];
    if (numberList > maiorNumero) {
        maiorNumero = numberList;
    }
    if (numberList < menorNumero) {
        menorNumero = numberList;
    }
}

print(maiorNumero);
print(menorNumero);