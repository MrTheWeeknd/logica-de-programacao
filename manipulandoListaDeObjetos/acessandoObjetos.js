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

function exibirDadosPessoa(objEstudante, infoPessoa) {
    return objEstudante[infoPessoa];
}

console.log(exibirDadosPessoa(objPessoa, 'nome'));