/* 1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso. */

class Carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    calcularGastoDePercurso(distancia, precoCombustivel) {
        return distancia * this.gastoMedioPorKm * precoCombustivel
    }
}

const uno = new Carro('Fiat', 'Branco', 1 / 13);
const prisma = new Carro('Chevrolet', 'Prata', 1 / 10)
const compass = new Carro('Jeep', 'Branco', 1 / 8.8)


console.log(('R$ ') + uno.calcularGastoDePercurso(115, 5).toFixed(2));
console.log(('R$ ') + prisma.calcularGastoDePercurso(115, 5).toFixed(2));
console.log(('R$ ') + compass.calcularGastoDePercurso(115, 5).toFixed(2));