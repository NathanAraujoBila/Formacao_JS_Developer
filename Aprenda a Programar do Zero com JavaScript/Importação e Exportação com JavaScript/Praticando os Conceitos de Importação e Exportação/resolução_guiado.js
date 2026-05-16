const {gets, print} = require('./resolucao_guiada_do_exercicio_maior_numero_sorteado.js');

const numerosSorteados = [];

for (let i = 0; i < 5; i++) {
    const numerosSorteado = gets();
    numerosSorteados.push(numerosSorteado);
    
}

let maiorValor = 0;

for (let i = 0; i < numerosSorteados.length; i++) {
    const numerosSorteado = numerosSorteados[i];
    if (numerosSorteado > maiorValor) {
        maiorValor = numerosSorteado;
    }
}

print(maiorValor);