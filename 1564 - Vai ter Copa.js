var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados = input.split('\n');

while(dados.length>0){
    let valor = parseInt(dados.shift());
    if(valor === 0){
        console.log("vai ter copa!");
    }else if((valor > 0) && (valor <= 100)){
        console.log("vai ter duas!");
    }
}  