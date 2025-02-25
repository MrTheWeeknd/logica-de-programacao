alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;

let tentativa = 1;

while(chute != numeroSecreto){
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);

    if(numeroSecreto == chute){
        break;
    } else {
        if(chute > numeroSecreto){
            alert(`O número secreto é menor que ${chute}` );
        } else{
            alert(`O número secreto é maior que ${chute}`);
        }

        tentativa++;
    }
}

let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa';
alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} após ${tentativa} ${palavraTentativa}`);

// if(tentativa == 1){
//     alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} após ${tentativa} ${palavraTentativa}`);
// } else{
//     alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} após ${tentativa} ${palavraTentativa}`);
// }