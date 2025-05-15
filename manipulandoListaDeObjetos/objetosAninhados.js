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


console.log("Objeto atual:", objPessoa.telefone);

objPessoa.telefone.push({
    celular: '11999999997',
    fixo: '1133333335',
    codigo: '+55'
})

console.log("Objeto adicionado:",objPessoa.telefone[2]);

console.log("Objeto final:", objPessoa.telefone);

console.log("Números com código do país:", objPessoa.telefone.filter((telefone) => {
    return telefone.codigo
}));
