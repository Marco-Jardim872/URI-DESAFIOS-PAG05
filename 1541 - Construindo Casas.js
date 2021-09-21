var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados = input.split('\n');

let valores = [];
let elementos = [];
let casa;
let leg;
let ter;

while(dados.length > 1){
    elementos = dados.shift().split(' ');
    valores = elementos.map((value)=>Number(value));
    
        if(valores.every((value)=>{return ((value > 0) && (value <= 1000))})){
            
            casa=valores[0] * valores[1];
            leg = valores[2];
            ter = Math.trunc(Math.sqrt(((casa * 100)/leg)));
            
        }else break;
        
    console.log(ter);
  
}