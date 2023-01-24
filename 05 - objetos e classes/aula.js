const gabriel = {
    nome: 'Gabriel L Rodrigues',
    idade: 22
};

gabriel.altura = 1.79;

delete gabriel.idade;

console.log(gabriel.nome);
console.log(gabriel.idade);
console.log(gabriel.altura);
console.log(gabriel);