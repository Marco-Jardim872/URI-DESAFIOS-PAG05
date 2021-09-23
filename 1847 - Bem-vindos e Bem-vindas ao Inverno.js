var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados = input.split(' ');

let a = parseInt(dados.shift());
let b = parseInt(dados.shift());
let c = parseInt(dados.shift());

if(a > b){
    if(c > b){
      console.log(':)');
    }else if(b-c < a-b){
      console.log(':)');
    }else{ 
      console.log(':(');
    }        
    
}else if(a < b){
    if(c < b){
      console.log(':(');
    }else if(b-c > a-b){
      console.log(':(');
    }else{
      console.log(':)');
    }
}else if(c > a){
  console.log(':)');
  }else{
    console.log(':(');
  }
