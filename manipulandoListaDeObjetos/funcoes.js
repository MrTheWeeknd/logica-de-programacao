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
    telefone: [{
        celular: '11999999999',
        fixo: '1133333333'
    }, {
        celular: '11999999998',
        fixo: '1133333334'
    } ]
}


const objPessoa1 = {
    nome: 'Lucas',
    idade: 23,
    cpf: '12345678900',
    endereco: {
        rua: 'Rua 1',
        numero: 123,
        cidade: 'Minas Gerais',
        estado: 'MG'
    },
    telefone: [{
        celular: '11999999999',
        fixo: '1133333333'
    }, {
        celular: '11999999998',
        fixo: '1133333334'
    } ]
}

const cidadeMatriz = "São Paulo";
function verificarCidade(objClientes, cidadeMatriz) {
    if(objClientes.endereco.cidade === cidadeMatriz){
        return objClientes.endereco.cidade = "Cidade Matriz";
    }
    return objClientes.endereco.cidade = "Cidade diferente da matriz";
} 

console.log(verificarCidade(objPessoa, cidadeMatriz));
console.log(objPessoa);

console.log("Segundo teste:")
console.log(verificarCidade(objPessoa1, cidadeMatriz));
console.log(objPessoa1);