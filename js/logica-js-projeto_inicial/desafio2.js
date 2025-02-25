let diaDaSemana = prompt('Qual é o dia da semana?');
if(diaDaSemana == 'Sábado' || diaDaSemana == 'Domingo'){
    alert('Bom final de semana!');
} else{
    alert('Boa semana!');
}


let numero = prompt('Digite um número');
if(numero >= 0){
    alert('Este é um número positivo');
} else{
    alert('Este é um número negativo');
}


let pontuacao = prompt('Qual sua pontuação?');
if (pontuacao >= 100){
    alert('Parabéns! Você venceu.')
} else{
    alert('Tente novamente para ganhar.');
}


let saldo = prompt('Qual o seu saldo atual?');
alert(`Seu saldo atual é de R$${saldo}`);


let nome = prompt('Qual o seu nome?');
alert(`Seja bem-vindo(a) ${nome}!`);