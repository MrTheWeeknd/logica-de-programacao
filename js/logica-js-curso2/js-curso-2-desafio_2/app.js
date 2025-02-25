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

let peso = parseInt(prompt('Insira seu peso:'));
let altura = parseFloat(prompt('Insira sua altura em m (Ex: 1.70)'));
function calcularIMC(peso, altura){
    let imc = (peso / (altura)**2);
    return imc;
}
console.log(calcularIMC(peso, altura));


let reais = parseFloat(prompt('Insira um valor em reais para converter para dólar. Ex: 3.00'));
function converterParaDolar(reais){
    let dolar = parseFloat(4.8 * reais).toFixed(2);
    return dolar;
}
console.log(converterParaDolar(reais));


let height = parseFloat(prompt('Insira a altura do retângulo'));
let width = parseFloat(prompt('Insira a área do retângulo'));
function calcularRetangulo(height, width){
    let perimetroRetangulo = parseFloat(2 * (width + height)).toFixed(2);
    let areaRetangulo = parseFloat(width * height).toFixed(2);
    return `O valor da área é ${areaRetangulo} e do perímetro é ${perimetroRetangulo}`;
}
console.log(calcularRetangulo(height, width));


let raioCirculo = parseFloat(prompt('Insira o valor do raio do círculo'));
let diametroCirculo = parseFloat(prompt('Insira o valor do diâmetro do círculo'));
function calcularCirculo(raioCirculo){
    let pi = 3.14
    let perimetroCirculo = parseFloat(2 * pi * raioCirculo).toFixed(2);
    let areaCirculo = parseFloat(pi * ((raioCirculo)**2)).toFixed(2);

    return `O perímetro do círculo é igual a ${perimetroCirculo} e o valor da área dele é igual a ${areaCirculo}`; 
}
console.log(calcularCirculo(raioCirculo))



// let numeroTabuada = parseInt(prompt('Insira um número para ser exibida a tabuada'));
// function tabuada(numeroTabuada){
//     for (let cont = 0; cont <= 10; cont++){
//         let multiplica = `${numeroTabuada} * ${cont} = ` (numeroTabuada*cont);
//         return multiplica; 
//     }
// }
// console.log(tabuada(numeroTabuada));