let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}


function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}
exibirMensagemInicial();


function verificarChute(){
    let chute = document.querySelector('input').value;
    if(chute!= numeroSecreto){
        if(chute > numeroSecreto){
            exibirTextoNaTela('h1', 'Você errou!');
            exibirTextoNaTela('p', 'O número secreto é menor.');
        } else{
            exibirTextoNaTela('h1', 'Você errou!');
            exibirTextoNaTela('p', 'O número secreto é maior.');
        }
        tentativas++;
        limparCampo();
    } else{
        exibirTextoNaTela('h1', 'Você acertou!');
        let palavraTentativa = tentativas == 1 ? 'tentativa' : 'tentativas';
        exibirTextoNaTela('p', `Você descobriu o número secreto após ${tentativas} ${palavraTentativa}.`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
}


function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    document.getElementById('reiniciar').setAttribute('disabled', true);
    exibirMensagemInicial();
}


function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}


function gerarNumeroAleatorio(){
    return parseInt(Math.random() * 10 + 1);
}