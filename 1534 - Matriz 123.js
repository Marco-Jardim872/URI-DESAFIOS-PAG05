var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados = input.split('\n');



while((dados.length>0)){

    let ordem = parseInt(dados.shift());
    if((ordem>=3)&&(ordem<70)){
    let matriz = [];
    matriz.length = ordem;
    let ini = 1;
    let fim = 2;
    let count1 = 0;
    let count2=ordem-1;
    
    matriz[0]= ini;
    matriz[ordem-1]= fim;

    for(let i=1;i<matriz.length-1;i++){
        matriz[i]= 3;
    }
    console.log(matriz.join(""));
    while((count1<ordem-1)){
        if(ordem%2===0){
            matriz.splice(count1,1);
            matriz.splice(count1 + 1,0,ini);

            if(count2!==ordem/2){
                matriz.splice(count2, 1);
                matriz.splice(count2-1,0,fim);
            }
        } if(ordem%2!==0){
            matriz.splice(count1,1);
            matriz.splice(count1 + 1,0,ini);
            if(count2!==(ordem+1/2)){
                matriz.splice(count2, 1);
                matriz.splice(count2-1,0,fim);
            }
         if(count2==(ordem+1)/2){
            matriz.splice(count2, 1);
            matriz.splice(count2-1,0,fim);
            matriz.splice(count2,1,3);
         }   
            
               
    }

    console.log(matriz.join(""));

    count1++;
    count2--;
    }
   

}
}