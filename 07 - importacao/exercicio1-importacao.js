/*1) Faça um programa que receba um número e escreva a sua respectiva tabuada.
    Exemplo:
        Entrada:
            2

        Saída:
            2x1 = 2
            2x2 = 4
            2x3 = 6
            2x4 = 8
            2x5 = 10
            2x6 = 12
            2x7 = 14
            2x8 = 16
            2x9 = 18
            2x10 = 20*/

const { number } = require('./exercicio1-auxiliar.js');
const { print } = require('./funcoes-auxiliares.js');
const numberReceived = number;

for (let i = 0; i <= 10; i++) {
    print(numberReceived * i);
}
