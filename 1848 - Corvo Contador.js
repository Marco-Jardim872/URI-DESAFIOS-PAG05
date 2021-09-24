var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados = input.split('\n');

let arr= dados.map((value)=>value.trim());
let count = 0;
let soma = 0;


for(let i of arr) {
  
  if ((i.length > 3)&&(i !== ("caw caw"))) continue;
  if(count>=3){
    break;
  }
  if(i.includes("--*")) {
    soma +=1;
  }
  if(i.includes("-*-")) {
    soma +=2;
  }
  if(i.includes("*--")) {
    soma +=4;
  }
  if(i.includes("-**")) {
    soma +=3;
  }
  if(i.includes("*-*")) {
    soma +=5;
  }
  if(i.includes("**-")) {
    soma +=6;
  }
  if(i.includes("***")) {
    soma +=7;
  }
  if(i.includes("---")) {
    soma +=0;
  }
  if(i.includes("caw caw")) {
    console.log(soma);
    count++; 
    soma = 0;
  }
  if(soma>1000){
    break;
  }

  
  
}
  
