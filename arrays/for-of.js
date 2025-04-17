const notas = [8, 9, 7, 10, 6, 8, 9, 10, 7, 8];

// o for of não armazena o índice, mas sim o valor do elemento

const media = (notas) => {
    let soma = 0;
    for(let nota of notas ) {
        soma += nota;
    }
    return soma / notas.length;
}

console.log(media(notas));