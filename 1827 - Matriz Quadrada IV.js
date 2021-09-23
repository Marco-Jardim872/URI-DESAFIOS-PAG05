var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados = input.split('\n');


while(dados.length > 0){
    let ordem = parseInt(dados.shift());

    if((ordem >= 5) && (ordem <= 101)){

        let matriz = new Array(ordem);

        for(let i = 0; i < matriz.length; i++){
            matriz[i] = new Array(ordem);
        }

        for(let i = 0; i < matriz.length; i++){
            for(let j = 0; j < matriz.length; j++){
                matriz[i][j] = 0;
                if(((i === 0)||(j === 0)||(i == ordem-1)||(j == ordem-1))){
                    matriz[i][j] = 0;
                }
                if(i == j){
                    matriz[i][j] = 2;
                }
                if( (i + j) == (ordem -1)){
                    matriz[i][j] = 3;
                }
                if( ( (i >= Math.trunc(ordem/3) ) && (i < ordem - ( Math.trunc(ordem/3) ) )) && ( (j >= Math.trunc(ordem/3) ) && (j < ordem - ( Math.trunc(ordem/3) ) ))){
                    matriz[i][j] = 1;
                }
                if((i == j) && ((i + j) == (ordem-1))){
                    matriz[i][j] = 4;
                }
            }
        console.log(matriz[i].join(""));
       
        }
    console.log(""); 
    }
   
}