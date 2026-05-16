const { gets, print } = require('./main.js');

const n = gets();
let maiorNumeroPar = 0;

for (let i = 0; i < n; i++) {
    const numero = gets();
    if (numero % 2 === 0){
        if (numero > maiorNumeroPar){
            maiorNumeroPar = numero;
        }
    }

}

print(maiorNumeroPar);