// 2) Faça um programa que receba N (quantidade de números) e seus respectivos valores.
// Imprima o maior número par e o menor número impar.

//     Exemplo:
//         Entrada:
//             5
//             3
//             4
//             1
//             10
//             8

//         Saída:
//             Maior número par: 10
//             Menor número impar: 1

const { gets, print } = require("./funcoes-auxiliares-ex2");

const numberList = [];
for (let i = 0; i < 6; i++) {
  const inputs = gets();
  numberList.push(inputs);
}

let maiorNumero = 0;
let menorImpar = 0;
let maiorPar = 0;

for (let i = 0; i < numberList.length; i++) {
  if (numberList[i] > maiorNumero) {
    maiorNumero = numberList[i];
  }
}

for (let i = 0; i < numberList.length; i++) {
  const number = numberList[i];
  if (number % 2 === 0) {
    if (number > maiorPar) {
      maiorPar = number;
    }
  }
}

menorImpar = maiorNumero;

for (let i = 0; i < numberList.length; i++) {
  const number = numberList[i];
  if (number % 2 === 1) {
    if (number < menorImpar) {
      menorImpar = number;
    }
  }
}

print(maiorPar);
print(menorImpar);
