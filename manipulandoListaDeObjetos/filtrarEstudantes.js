const estudante = require('./estudantes.json');


// O método hasOwnProperty() é usado para verificar se um objeto possui uma propriedade específica.
function filtraPorPropriedade(lista, propriedade) {
    return lista.filter((estudante) => {
        return !estudante.endereco.hasOwnProperty(propriedade);
    });
}

const listaEnderecosIncompletos = filtraPorPropriedade(estudante, 'cep');
console.log(listaEnderecosIncompletos);