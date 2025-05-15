console.log("Questão 1:");

const biblioteca = [
    { id: 1, titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", anoPublicacao: 1954 },
    { id: 2, titulo: "Dom Quixote", autor: "Miguel de Cervantes", anoPublicacao: 1605 },
    { id: 3, titulo: "1984", autor: "George Orwell", anoPublicacao: 1949 }
]

function encontrarLivroPorId(lista, id){
    return lista.find((livro) => livro.id === id);
}

const livroEncontrado = encontrarLivroPorId(biblioteca, 3);
console.log(livroEncontrado);



console.log("Questão 2:");

const catalogoFilmes = [
    { id: 1, titulo: "Matrix", diretor: "Lana Wachowski", anoLancamento: 1999 },
    { id: 2, titulo: "Jurassic Park", diretor: "Steven Spielberg", anoLancamento: 1993 },
    { id: 3, titulo: "Inception", diretor: "Christopher Nolan", anoLancamento: 2010 }
]

function filtrarFilmesPorAno(lista, ano){
    return lista.filter((filme) => filme.anoLancamento === ano);
}

const filmesFiltrados = filtrarFilmesPorAno(catalogoFilmes, 2010);  
console.log(filmesFiltrados);



console.log("Questão 3:");
const listaProdutos = [
    { id: 1, nome: "Camiseta", preco: 25.99 },
    { id: 2, nome: "Calça Jeans", preco: 49.99 },
    { id: 3, nome: "Tênis", preco: 79.99 },
    { id: 4, nome: "Boné", preco: 15.99 }
]

function filtrarOrdernarProdutosPorPreco(lista, precoMaximo){
    return lista.filter((produto) => produto.preco <= precoMaximo)
                .sort((a, b) => a.preco - b.preco);
}

console.log(filtrarOrdernarProdutosPorPreco(listaProdutos, 26));



console.log("Questão 4:");
const animais = [
    { id: 1, nome: "Leão", especie: "Felino", idade: 5 },
    { id: 2, nome: "Elefante", especie: "Mamífero", idade: 10 },
    { id: 3, nome: "Pinguim", especie: "Ave", idade: 3 }
]

function ordenarAnimais(lista, propriedade){
    return lista.sort((a, b) => {
        if (a[propriedade] < b[propriedade]) {
            return -1;
        }
        if (a[propriedade] > b[propriedade]) {
            return 1;
        }
        return 0;
    });
}

const animaisOrdenados = ordenarAnimais(animais, 'id');
console.log(animaisOrdenados);


console.log("Questão 5:");
const departamentos = [
    {
        id: 1,
        nome: "Vendas",
        funcionarios: [
            { id: 101, nome: "Ana", cargo: "Vendedor" },
            { id: 102, nome: "Carlos", cargo: "Gerente de vendas" }
        ]
    },
    {
        id: 2,
        nome: "TI",
        funcionarios: [
            { id: 201, nome: "Maria", cargo: "Desenvolvedor" },
            { id: 202, nome: "João", cargo: "Analista de sistemas" }
        ]
    }
]

function encontrarFuncionarioPorId(lista, id){
    for (let i = 0; i < lista.length; i++) {
        const departamento = lista[i];
        const funcionario = departamento.funcionarios.find((funcionario) => funcionario.id === id);
        if (funcionario) {
            return funcionario;
        }
    }
    return null;
}

const funcionarioEncontrado = encontrarFuncionarioPorId(departamentos, 202);
console.log(funcionarioEncontrado);