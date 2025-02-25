console.log('Bem-Vindo!')


let meuNome = 'Lucas';
console.log(`Bem-vindo, ${meuNome}`);
alert(`Bem-vindo, ${meuNome}`);


let linguagemDeProgramacao = prompt('Qual a linguagem de programação que você mais gosta?');
console.log(`A linguagem de programação que o usuário gosta é: ${linguagemDeProgramacao}`);


let valor1 = 10;
let valor2 = 4;
let resultado = valor1 + valor2;
console.log(`A soma de ${valor1} + ${valor2} é igual a ${resultado}`);


let resultado1 = valor1 - valor2;
console.log(`A diferença de ${valor1} - ${valor2} é igual a ${resultado1}`);


let idade = prompt('Insira a sua idade');
if(idade < 18){
    console.log('Você é menor de idade');
} else{
    console.log('Você é maior de idade');
}


let numero = prompt('Insira um número');
if(numero != null){
    if(numero == 0){
        console.log('Número zero');
    } else if (numero > 0){
        console.log('Número positivo');
    } else{
        console.log('Número negativo');
    }
}


let imprimirNumeros = 1;
while(imprimirNumeros < 11){
    console.log(`${imprimirNumeros}`);
    imprimirNumeros++;
}


let nota = prompt('Insira a sua nota');
if(nota < 7){
    console.log('Você foi reprovado');
} else{
    console.log('Você foi aprovado');
}


console.log(Math.random());


console.log(parseInt(Math.random()*10 + 1));


console.log(parseInt(Math.random()*1000 + 1));