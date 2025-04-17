const estudanteReprovou = (nota, falta) => {
    if (nota < 7 && falta > 4) {
        return true;
    } else {
        return false;
    }
}


const exibeNome = (nome) => nome;

console.log(estudanteReprovou(6, 5));
console.log(estudanteReprovou(8, 2));
console.log(exibeNome('Caroline'));