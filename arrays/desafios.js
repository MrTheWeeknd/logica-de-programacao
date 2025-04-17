const lista1= [1,2,3,4,5];
const lista2= [6,7,8,9,10];

function aceitaListas(lista1, lista2){
    return [...lista1, ...lista2];
}

const valores = [2, 4, 6, 8, 10];

function somaValores(lista) {
    const soma = lista.reduce((acumulador, valor) => {
        return acumulador + valor;
    }, 0); 
    return soma;
}

console.log(somaValores(valores)); 


const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho']
const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul']
const listaUnica = [...new Set([...coresLista1, ...coresLista2])]
console.log(listaUnica);


const listaNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const maiorQueCinco = listaNumeros.filter((valor) => {
    const indice = listaNumeros.indexOf(valor);
    return listaNumeros[indice] > 5 && listaNumeros[indice] % 3 === 0;
});

console.log(maiorQueCinco);


const somaNumeros = listaNumeros.reduce((acumulador, valor) => {
    return acumulador + valor;
}  , 0);
console.log(somaNumeros);