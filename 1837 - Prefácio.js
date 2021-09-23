var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados = input.split(' ');

let a = parseInt(dados.shift());
let b = parseInt(dados.shift());
let r;
let q;
if(a>=0){
  q = Math.trunc(a/b);
  r = a % b;
}else{
  for (let x = 0; x < Math.abs(b); x++){
    if(b===0) break;
    if( Number.isInteger((a - x) / b)){
      r = x;
    }
    q = (a - r)/b;
  }
}
console.log(q + " " + r);