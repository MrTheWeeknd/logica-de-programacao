const notas = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const nomes = ['Ana julia', 'bia', 'Carlos augusto', 'DANIEL'];


// map é um método callback 
const notasAtualizadas = notas.map((nota) => {
    return nota + 1 >= 10 ? 10 : nota + 1;
});

const nomesAtualizados = nomes.map((nome) => {
    return nome.toUpperCase();
});

console.log(notasAtualizadas);
console.log(nomesAtualizados);


// a diferença entre o forEach e o map é que o forEach não retorna nada, enquanto o map retorna um novo array com os valores atualizados. O forEach é usado para executar uma função em cada elemento do array, enquanto o map é usado para transformar os elementos do array em um novo array com os valores transformados.