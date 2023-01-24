// 3) Faça um programa que calcule e imprima o salário salário a ser transferido para um funcionário.
// Para realizar o calculo receba o valor bruto do salário e o adicional dos benefícios.
// O salário salário a ser transferido é calculado da seguinte maneira: 
   
//    valor bruto do salário - percentual de imposto mediante a faixa salarial + adicional dos benefícios

// Para calcular o percentual de imposto segue as aliquotas:

//     De R$ 0.00 a R$ 1100.00 = 5.00%
//     De R$ 1100.01 a R$ 2500.00 = 10.00%
//     Maior que R$ 2500.00 = 15.00%

//     Exemplo:
//         Entrada:
//             2000
//             250

//         Saída:
//             2050.00

const { gets, print } = require('./funcoes-auxiliares-ex3');

const inputs = [];
for (let i = 0; i < 2; i++) {
    const numberList = gets();
    inputs.push(numberList);
}

let aliquota = 0;

function classificarAliquota(valor) {
    if (valor >= 0 && valor <= 1100) {
        return aliquota = 0.05;
    } else if (valor >= 1100.01 && valor <= 2500) {
        return aliquota = 0.1;
    } else {
        return aliquota = 0.15;
    }
}

(function () {
    const salario = inputs[0];
    const beneficio = inputs[1];
    
    const aliquota = ((classificarAliquota)(salario)) 
    const desconto = (salario * aliquota)

    const salarioBruto = salario - desconto + beneficio;
    print(salarioBruto);
})();