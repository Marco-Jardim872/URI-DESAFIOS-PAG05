var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados = input.split('\n');

while(dados.length > 0){
    let numLesmas = parseInt(dados.shift());
    if(numLesmas>=1 && numLesmas<=500){
        let lesmas = ((dados.shift()).split(' ')).map((value)=>Number(value));
    
        lesmas.sort((a,b)=>b-a);
        let vencedor = lesmas[0];
            if(vencedor >= 20){
                console.log("3");
            }else if((vencedor >= 10) && (vencedor < 20)){
                console.log("2");
            }else if(vencedor < 10){
                console.log("1");
            }
    }else break;
}
 