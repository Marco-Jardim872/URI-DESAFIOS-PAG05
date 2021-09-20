var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados = input.split('\n');

let opr = dados.shift();
let matriz=[];
matriz.length = 12;
let soma=0;
let media =0;
let count=0;

for(let i=0; i<12; i++){
    matriz[i]= new Array(12);
    for(let j=0; j<12; j++){
        matriz[i][j]=parseFloat(dados.shift());
    }
}


for(let i=0; i<5; i++){
    for(let j = 1 + count ; j<11-count; j++){
        
        soma+= matriz[i][j];
       
    }
    count++;
}


media = (soma/30);

if(opr.startsWith("S")){
    console.log(soma.toFixed(1));
}else{
    console.log(media.toFixed(1));
}
