const { gets: gets, print } = require('./funcoes-auxiliares');

const numerosSorteados = [];
for (let i = 0; i < 5; i++) {
    const numerosSorteado = gets();
    numerosSorteados.push(numerosSorteado);
}

let maiorNumero = 0;

for (let i = 0; i < numerosSorteados.length; i++) {
    const numeroSorteado = numerosSorteados[i];
    if (numeroSorteado > maiorNumero) {
        maiorNumero = numeroSorteado
    }
}

print(maiorNumero);
