var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados = input.split('\n');

let num = parseInt(dados.shift());
let count = 1;

let elementos = {
  papel : ['pedra', 'Spock'],
  tesoura : ['papel', 'lagarto'],
  pedra : ['lagarto', 'tesoura'],
  lagarto : ['Spock', 'papel'],
  Spock : ['tesoura', 'pedra']
};

while(count <= num){
  let jogo = dados.shift().split(" ");
  let sheldon = jogo.shift();
  let raj = (jogo.shift()).trim();
  let resultado = (elementos[sheldon].includes(raj));

    if(sheldon == raj){
      console.log("Caso #" + count + ": De novo!");
    }else if(resultado){
      console.log("Caso #" + count + ": Bazinga!");
    }else{ 
      console.log("Caso #" + count + ": Raj trapaceou!");
    }
  count++;
}
 