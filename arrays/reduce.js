const salaJS = [1,4,5,6,7,8,9];
const salaPython = [2,3,4,5,6,7,8,9];
const salaJava = [1,2,3,4,5,6,7,8,9];

// o reduce funciona como um forEach, mas ele retorna um valor acumulado. O reduce é usado para transformar um array em um único valor, como uma soma ou uma média.
// o reduce precisa de um acumulador, um parâmetro que vai acumulando os valores do array, e um valor inicial, que é o valor que o acumulador vai começar. O valor inicial é opcional, mas é recomendado usar para evitar erros. Nesse caso foi usado o valor 0.
function calculaMedia(listaDeNotas){
    const somaDasNotas = listaDeNotas.reduce((acumulador, nota) => {
        return acumulador + nota;
    }, 0);
    return somaDasNotas / listaDeNotas.length;
}

console.log(calculaMedia(salaJS));
console.log(calculaMedia(salaPython));      
console.log(calculaMedia(salaJava));