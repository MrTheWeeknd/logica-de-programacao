const objPessoa = {
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

console.log(objPessoa.nome);
console.log(objPessoa.endereco.rua);
console.log('O telefone celular é', objPessoa.telefone.celular);