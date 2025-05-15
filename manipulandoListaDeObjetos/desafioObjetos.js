const livro = {
    titulo: "O Senhor dos Anéis",
    autor: 'J.R.R. Tolkien',
    anoPublicacao: 1954,
    genero: 'Fantasia'
}

console.log("Questão 1:");
console.log(livro.titulo);

console.log("Questão 2:");
const anoAtual = new Date().getFullYear();
const livro1 = {
    titulo: "Cinquenta Tons de Cinza",
    autor: 'E.L. James',
    anoPublicacao: 2011,
    genero: 'Romance'
}
livro1.idade = anoAtual - livro1.anoPublicacao;
console.log("O livro", livro1.titulo, "foi publicado em", livro1.anoPublicacao, "então hoje ele tem", livro1.idade, "anos.");


console.log("Questão 3:");
console.log("O gênero do livro é", livro1['genero'], "e ele tem", livro1['idade'], "anos.");

console.log("Questão 4:");
livro.avaliacao = null;
livro.avaliacao = 4.5;
console.log("A avaliação do livro", livro.titulo, "é", livro.avaliacao);

console.log("Questão 5:");
livro.genero = "Aventura";
console.log("O gênero do livro", livro.titulo, "agora é", livro.genero);

console.log("Questão 6:");
console.log("O objeto livro atual:", livro)
delete livro.avaliacao;
console.log("O objeto livro após a exclusão da propriedade avaliação", livro)