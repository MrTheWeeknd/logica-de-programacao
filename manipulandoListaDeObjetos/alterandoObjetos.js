const pessoa = {
    nome: 'Lucas',
    idade: 23,
    cpf: '12345678900',
    endereco: {
        rua: 'Rua 1',
        numero: 123,
        cidade: 'São Paulo',
        estado: 'SP'
    },
    telefone: {
        celular: '11999999999',
        fixo: '1133333333'
    }
}

//adcionando uma nova propriedade ao objeto
pessoa.nacionalidade = 'brasileiro';
pessoa.nacionalidade = 'italiano';
console.log(pessoa.nacionalidade);
console.log(pessoa);

delete pessoa.nacionalidade;
console.log(pessoa);
