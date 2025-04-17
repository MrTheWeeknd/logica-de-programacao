const procurarAlunoMedia = (nome) => {

    const listaAlunos = [
        'Ana',
        'Bruno',
        'Carlos',
        'Daniela',
        'Eduardo',
        'Fernanda',
        'Gabriel',
        'Helena',
        'Igor',
        'Juliana'
    ];

    const listaNotas = [7,8,3,4,5,8,10,8,9,7];
    const lista = [listaAlunos, listaNotas];

    if(lista[0].includes(nome)){
        const indiceAluno = lista[0].indexOf(nome);
        const indiceNota = lista[1][indiceAluno];

        return `O aluno ${nome} está matriculado. A sua nota é ${indiceNota}.`;
    } else {
        return `O aluno ${nome} não está matriculado.`;
    }
}

console.log(procurarAlunoMedia('Caralos'));
