
const procurarEmLista = (nome) => {
  const alunos = [
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
  
  const notas = [8, 9, 7, 10, 6, 8, 9, 10, 7, 8];

   if(alunos.includes(nome)){
    return `O aluno ${nome} está matriculado. A sua nota é ${notas[alunos.indexOf(nome)]}.`;
   } else {
    return `O aluno ${nome} não está matriculado.`;
   }
}

console.log(procurarEmLista('Bruno'));