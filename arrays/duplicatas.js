const nomesDuplicados = ['Lucas', 'Lucas', 'Ana', 'Ana', 'Pedro', 'Pedro', 'Maria', 'Maria'];

//dessa maneira eu mantenho o formato de lista. Se eu usasse somente o new Set ele retornaria um objeto, e não uma lista.
const nomesUnicos = [...new Set(nomesDuplicados)];
console.log(nomesUnicos);