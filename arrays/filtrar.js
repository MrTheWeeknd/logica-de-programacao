const alunos = ['João', 'Maria', 'José', 'Ana', 'Pedro', 'Lucas'];
const medias = [7, 8, 9, 10, 6, 5];


// o callback filter funciona como um forEach,
const reprovados = alunos.filter((aluno, indice) => {
    return medias[indice] < 7;
});

console.log(reprovados);