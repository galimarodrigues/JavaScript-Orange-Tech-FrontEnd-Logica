/*
Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
 1 - Preço do etanol;
 2 - Preço do gasolina;
 3 - O tipo de combustível que está no seu carro;
 4 - Gasto médio de combustível do carro por KM;
 5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.
*/

const precoEtanol = 3.89;
const precoGasolina = 4.99;
const distanciaPercorridaKm = 120;
const litrosPorKm = 9.5;
const tipoCombustivel = 'Etanol';

const litrosConsumidos = distanciaPercorridaKm / litrosPorKm;

if (tipoCombustivel === 'Etanol') {
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log('O valor total gasto foi R$', valorGasto.toFixed(2));
} else {
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log('O valor total gasto foi R$', valorGasto.toFixed(2));
}

