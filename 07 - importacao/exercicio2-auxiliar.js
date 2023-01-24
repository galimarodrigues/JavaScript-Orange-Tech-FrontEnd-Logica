const entradas = [205, 100, 150, 4, 93];
let i = 0;

function gets() {
    const valor = entradas[i];
    i = i + 1;
    return valor;
}

function print(texto) {
    console.log(texto);
}

module.exports = { gets, print };