let texto = document.querySelector('h1');
texto.innerHTML = 'Hora do Desafio';


function verificarCliqueConsole(){
    console.log('O botão foi clicado.');
}

function verificarCliqueAlert(){
    console.log('Eu amo JS.');
}

function verificarCliquePrompt(){
    let cidade = prompt('Digite o nome de uma cidade do Brasil');
    alert(`Eu estive em ${cidade} e lembrei de você`);
}

function verificarCliqueSoma(){
    let valor1 = parseInt(prompt('Digite um primeiro valor para a soma:'));
    let valor2 = parseInt(prompt('Digite um segundo valor para a soma:'));
    
    let soma = valor1 + valor2;

    alert(`O valor da soma de ${valor1} + ${valor2} é igual a ${soma}`);
}


function saudacao(){
    return 'Olá, mundo!';
}
console.log(saudacao());


let nome = prompt('Qual o seu nome?');
function saudarAlguem(nome){
    return `Olá, ${nome}!`;
}
console.log(saudarAlguem(nome));


let numero = prompt('Digite um número para retornar o dobro');
let valorDobrado = numero * 2;
function dobro(){    
    return `O dobro de ${numero} é igual a ${valorDobrado}`;
}
console.log(dobro());


let numero1 = parseInt(prompt('Digite um primeiro valor para tirar a média'));
let numero2 = parseInt(prompt('Digite um segundo valor para tirar a média'));
let numero3 = parseInt(prompt('Digite um terceiro valor para tirar a média'));
function media(numero1, numero2, numero3){
    let somaDosNumeros = numero1 + numero2 + numero3;
    return somaDosNumeros / 3;
}
console.log(media(numero1, numero2, numero3));


let comparar1 = parseInt(prompt('Digite o primeiro número para comparar'));
let comparar2 = parseInt(prompt('Digite o segundo número para comparar'));
function compararNumeros(comparar1, comparar2){
    if(comparar1 > comparar2){
        return `${comparar1} é maior que ${comparar2}`;
    } else if (comparar2 > comparar1){
        return `${comparar2} é maior que ${comparar1}`;
    } else{
        return 'Os números têm valores iguais.';
    }
}
console.log(compararNumeros(comparar1, comparar2));


let quadrado = parseInt(prompt('Digite um número para ser multiplicado por ele mesmo:'));
function numeroQuadrado(quadrado){
    return quadrado * quadrado;
}
console.log(numeroQuadrado(quadrado));