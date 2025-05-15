const estudante = require('./estudante.json'); 

console.log(estudante.nome);

const stringEstudante = JSON.stringify(estudante);
console.log(stringEstudante);

//converter um JSON para string pode ser útil para enviar dados para um servidor ou armazená-los em um banco de dados.
console.log(typeof stringEstudante);

const objEstudante = JSON.parse(stringEstudante);
console.log(objEstudante);
console.log(typeof objEstudante);