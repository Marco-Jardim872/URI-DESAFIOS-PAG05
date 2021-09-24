var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados = input.split('\n');

let num= parseInt(dados.shift());
let arr =['L','I','F','E',' ','I','S',' ','N','O','T',' ','A',' ','P','R','O','B','L','E','M',' ','T','O',' ','B','E',' ','S','O','L','V','E','D'];


  let frase = arr.slice(0,num);