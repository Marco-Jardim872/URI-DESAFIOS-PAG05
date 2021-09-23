var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados = input.split('\n');

let num = parseInt(dados.shift());
let r1 = 0;
let r2 = 0;
let rm = 0;
while((num > 0) && (num <= 10000)){
    let valores = (dados.shift()).split(' ');
    

    r1 = parseInt(valores[0]);
    r2 = parseInt(valores[1]);
    rm = r1 + r2;
    console.log(rm);
    num--;
}  