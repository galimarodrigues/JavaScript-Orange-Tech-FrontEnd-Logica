/*Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
 1 - Preço do combustível;
 2 - Gasto médio de combustível do carro por KM;
 3 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.
*/

const precoCombustivel = 4.89;
const kmPorLitros = 11;
const distanciaEmKm = 1177;

const litrosConsumidos = distanciaEmKm / kmPorLitros;
const valorTotal = litrosConsumidos * precoCombustivel

console.log(valorTotal.toFixed(2));
