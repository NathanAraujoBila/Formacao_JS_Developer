const { gets, print } = require('./main');

const valorSalarialBruto = gets();
const valorAdicionalDosBeneficios = gets();

function calcularPorcentagem(valor, percentual){
    return valor * (percentual / 100);
}

print(calcularPorcentagem(valorSalarialBruto, 10));