const notas = [8, 9, 7, 10, 6, 8, 9, 10, 7, 8];

const media = (notas) => {
    let soma = 0;
    for(let indice = 0; indice < notas.length; indice++){
        soma += notas[indice];
    }
    return soma / notas.length;
}

console.log(media(notas));